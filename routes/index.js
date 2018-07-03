'use strict';

var express = require('express');
var router = express.Router();

var shopList = require('../mongo/shopCartMogo').shopList;
var shopCart = require('../mongo/shopCartMogo').shopCart;
var userOrder = require('../mongo/shopCartMogo').userOrder;
var collectShop = require('../mongo/shopCartMogo').collectShop;
var userSite = require('../mongo/user').userSite;
var userMessage = require('../mongo/user').userMessage;

//获取购物车信息
router.post('/getCartData', function (req, res) {
    var num = req.body.id || 0;
    toData(num);
    function toData(id) {
        shopList.find({ id: id }, function (err, result) {
            if (err) {
                throw err;
            }
            res.status(200).json(result);
        });
    }
});

//点击修改购买商品的数量
router.post('/changeShop', function (req, res) {
    var id = req.body.id;
    var value = req.body.value;
    shopList.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        var title = result[0].content.title;
        var txt = result[0].content.txt;
        var price = result[0].content.price;
        var all = result[0].content.all;
        shopList.update({ id: id }, { $set: { content: {
                    all: all,
                    value: value,
                    price: price,
                    txt: txt,
                    title: title

                } } }, function (err) {
            if (err) {
                throw err;
            }
            res.status(200).json(1);
        });
    });
});

router.get('/shopData', function (req, res) {
    shopList.find({ id: { $gte: 0, $lte: 5 } }, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    });
});

//获取商品信息
router.get('/getShopData', function (req, res) {
    shopList.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    });
});

//展示购物车添加信息
router.post('/storeShop', function (req, res) {
    var id = req.body.id;
    shopCart.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        var length = result.length;
        if (length == 0) {
            shopCart.find({}, function (err, result) {
                if (err) {
                    throw err;
                }
                res.status(200).json(result);
            });
        } else {
            res.status(200).json(result);
        }
    });
});

//获取添加至购物车中的全部信息
router.get('/shopAll', function (req, res) {
    var id = req.query.id;
    userMessage.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result[0].shopCart);
    });
});

//改变购物车里的商品数量
router.post('/changeCart', function (req, res) {
    var id = req.body.id;
    var value = req.body.value;
    shopCart.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        var img = result[0].img;
        var title = result[0].title;
        var txt = result[0].txt;
        var price = result[0].price;
        shopCart.update({ id: id }, { $set: {
                id: id,
                value: value,
                img: img,
                title: title,
                txt: txt,
                price: price
            } }, function (err) {
            if (err) {
                throw err;
            }
            res.status(200).json(1);
        });
    });
});

//存储加入购物车的商品信息
router.post('/upDateShop', function (req, res) {
    var userId = req.body.userId;
    var shopValue = req.body.value;
    var id = req.body.id;
    var img = req.body.img;
    var title = req.body.title;
    var txt = req.body.txt;
    var price = req.body.price;
    shopCart.find({ shopId: userId, id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        var length = result.length;
        if (length !== 0) {
            var beValue = result[0].value;
            var value = Number(beValue) + Number(shopValue);
            shopCart.update({ shopId: userId, id: id }, { $set: { value: value } }, function (err) {
                if (err) {
                    throw err;
                }
                shopCart.find({ shopId: userId, id: id }, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json(result);
                    return;
                });
            });
        } else {
            shopCart.create({
                shopId: userId,
                id: id,
                value: shopValue,
                img: img,
                title: title,
                txt: txt,
                price: price
            }, function (err) {
                if (err) {
                    throw err;
                }
                shopCart.find({ shopId: userId, id: id }, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json(result);
                    return;
                });
            });
        }
    });
});

//点击删除添加到购物车的商品
router.get('/removeShop', function (req, res) {
    var id = req.query.id;
    var userId = req.query.userId;
    shopCart.remove({ id: id }, function (err) {
        if (err) {
            throw err;
        }
        console.log('删除成功');
        userMessage.find({ id: userId }, function (err, result) {
            if (err) {
                throw err;
            }
            var userName = result[0].name;
            var userPaw = result[0].password;
            var userEmail = result[0].email;
            var userGrade = result[0].grade;
            var orderDetail = result[0].orderDetail;
            shopCart.find({}, function (err, result) {
                if (err) {
                    throw err;
                }
                var userShopCart = result;
                var userList = {
                    id: userId,
                    name: userName,
                    password: userPaw,
                    email: userEmail,
                    grade: userGrade,
                    shopCart: userShopCart,
                    orderDetail: orderDetail
                };
                userMessage.update({ id: userId }, { $set: userList }, function (err) {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json(1);
                });
            });
        });
    });
});

//判断否收藏
router.post('/isNoCollect', function (req, res) {
    var id = req.body.id;
    collectShop.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        if (result.length != 0) {
            res.status(200).json('true');
        } else {
            res.status(200).json('false');
        }
    });
});
//收藏商品
router.get('/collectShop', function (req, res) {
    var id = req.query.id;
    shopList.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result[0].content);
        var value = result[0].content.value;
        var title = result[0].content.title;
        var txt = result[0].content.txt;
        var price = result[0].content.price;
        var img = result[0].phoneImg[0].img;
        collectShop.create({
            id: id,
            value: value,
            title: title,
            txt: txt,
            price: price,
            img: img
        }, function (err) {
            if (err) {
                throw err;
            }
            res.status(200).json(1);
        });
    });
});
//取消收藏
router.get('/reCollect', function (req, res) {
    var id = req.query.id;
    collectShop.remove({ id: id }, function (err) {
        if (err) {
            throw err;
        }
        console.log('收藏取消');
        res.status(200).json(1);
    });
});

//产品展示页面
router.get('/', function (req, res) {
    res.render('index', { title: '科技产品公司' });
});
router.get('/index', function (req, res) {
    res.render('index', { title: '科技产品公司' });
});
router.get('/shopCart', function (req, res) {
    res.render('shopCart', { title: '购物车' });
});
router.get('/accessoryRim', function (req, res) {
    res.render('accessoryRim', { title: '周边产品' });
});
router.get('/addShopCart', function (req, res) {
    userOrder.remove({}, function (err) {
        if (err) {
            throw err;
        }
    });
    res.render('addShopCart', { title: '添加商品' });
});
router.get('/shopElectronics', function (req, res) {
    res.render('shopElectronics', { title: '电子产品' });
});

router.get('/goPay', function (req, res) {
    userSite.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        var userSite = result;
        userOrder.find({}, function (err, result) {
            if (err) {
                throw err;
            }console.log(result);
            var value = 0,
                total = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    value += item.value;
                    total += item.value * item.price;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            res.render('goPay', {
                title: '结算',
                value: value,
                total: total,
                userSite: userSite,
                shopCart: result
            });
        });
    });
});

//用户订单详情
router.post('/saveOrder', function (req, res) {
    var id = req.body.userId;
    userOrder.create(req.body, function (err) {
        if (err) {
            throw err;
        }
    });

    userMessage.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        var name = result[0].name;
        var email = result[0].email;
        var password = result[0].password;
        var grade = result[0].grade;
        var shopCart = result[0].shopCart;
        var userSite = result[0].userSite;
        var userOrder = [];
        userOrder.push(req.body);
        var user = {
            id: id,
            name: name,
            email: email,
            password: password,
            grade: grade,
            shopCart: shopCart,
            userSite: userSite,
            orderDetail: userOrder
        };
        userMessage.update({ id: id }, { $set: user }, function (err) {
            if (err) {
                throw err;
            }
            console.log('用户订单添加成功');
            res.status(200).json(1);
        });
    });
});

//个人中心
router.get('/personal', function (req, res) {
    res.render('personal', { title: '个人中心' });
});
router.get('/collect', function (req, res) {
    res.render('collect', { title: '我的收藏' });
});
router.get('/order', function (req, res) {
    res.render('order', { title: '我的订单' });
});
router.get('/coupon', function (req, res) {
    res.render('coupon', { title: '我的优惠劵' });
});
router.get('/consume', function (req, res) {
    res.render('consume', { title: '消费明细' });
});
router.get('/orderDetail', function (req, res) {
    res.render('orderDetail', { title: '订单详情' });
});

//退出登录
router.get('/userExit', function (req, res) {
    shopCart.remove({}, function (err) {
        if (err) {
            throw err;
        }
    });
    userSite.remove({}, function (err) {
        if (err) {
            throw err;
        }
        console.log('退出成功');
        res.status(200).json(1);
    });
});

//自动获取添加成功的地址
router.get('/site', function (req, res) {
    userSite.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('site', {
            title: '收货地址',
            result: result
        });
    });
});
//添加用户地址
router.post('/user', function (req, res) {
    var name = req.body.name;
    var userId = req.body.userId;
    userSite.find({ name: name }, function (err, result) {
        if (err) {
            throw err;
        }
        var length = result.length;
        if (length == 0) {
            userSite.create(req.body, function (err) {
                if (err) {
                    throw err;
                }
                console.log('添加成功');
                userSite.find({}, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    var userSite = result;
                    userMessage.find({ id: userId }, function (err, result) {
                        if (err) {
                            throw err;
                        }
                        var name = result[0].name;
                        var email = result[0].email;
                        var password = result[0].password;
                        var grade = result[0].grade;
                        var shopCart = result[0].shopCart;
                        var orderDetail = result[0].orderDetail;
                        var user = {
                            id: userId,
                            name: name,
                            email: email,
                            password: password,
                            grade: grade,
                            shopCart: shopCart,
                            userSite: userSite,
                            orderDetail: orderDetail
                        };
                        userMessage.update({ id: userId }, { $set: user }, function (err) {
                            if (err) {
                                throw err;
                            }
                            console.log('用户地址添加成功');
                            userMessage.find({ id: userId }, function (err, result) {
                                if (err) {
                                    throw err;
                                }
                                res.render('site', {
                                    title: '添加地址',
                                    result: result
                                });
                            });
                        });
                    });
                });
            });
        }
    });
});
//修改用户地址
router.post('/userChange', function (req, res) {
    var id = req.body.id;
    console.log(id);
    userSite.update({ id: id }, { $set: req.body }, function (err) {
        if (err) {
            throw err;
        }
        console.log('地址更新成功');
        res.status(200).json(1);
    });
});
//删除已添加的地址
router.get('/remSite', function (req, res) {
    var userId = req.query.userId;
    var siteId = req.query.id;
    userSite.remove({ id: siteId }, function (err) {
        if (err) {
            throw err;
        }
        console.log('删除地址成功');
        userSite.find({}, function (err, result) {
            if (err) {
                throw err;
            }
            var userSite = result;
            userMessage.find({ id: userId }, function (err, result) {
                if (err) {
                    throw err;
                }
                var name = result[0].name;
                var email = result[0].email;
                var password = result[0].password;
                var grade = result[0].grade;
                var shopCart = result[0].shopCart;
                var orderDetail = result[0].orderDetail;
                var user = {
                    id: userId,
                    name: name,
                    email: email,
                    password: password,
                    grade: grade,
                    shopCart: shopCart,
                    userSite: userSite,
                    orderDetail: orderDetail
                };
                userMessage.update({ id: userId }, { $set: user }, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log('用户地址添加成功');
                    res.status(200).json(1);
                });
            });
        });
    });
});

//获取商品收藏信息
router.get('/getCollect', function (req, res) {
    collectShop.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    });
});

//获取用户信息
router.get('/getUserMessage', function (req, res) {
    var id = req.query.id;
    userMessage.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = result[0].userSite[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                userSite.create(item, function (err) {
                    if (err) {
                        throw err;
                    }
                });
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        res.status(200).json(result);
    });
});

//获取用户添加的商品信息
router.get('/userShopCart', function (req, res) {
    var userId = req.query.id;
    userMessage.find({ id: userId }, function (err, result) {
        if (err) {
            throw err;
        }
        var userName = result[0].name;
        var userPaw = result[0].password;
        var userEmail = result[0].email;
        var userGrade = result[0].grade;
        var orderDetail = result[0].orderDetail;
        if (result[0].shopCart.length == 0) {
            shopCart.find({}, function (err, result) {
                if (err) {
                    throw err;
                }
                var userShopCart = result;
                var userList = {
                    id: userId,
                    name: userName,
                    password: userPaw,
                    email: userEmail,
                    grade: userGrade,
                    shopCart: userShopCart,
                    orderDetail: orderDetail
                };
                userMessage.update({ id: userId }, { $set: userList }, function (err) {
                    if (err) {
                        throw err;
                    }
                    userMessage.find({ id: userId }, function (err, result) {
                        if (err) {
                            throw err;
                        }
                        res.status(200).json(result);
                    });
                });
            });
        } else {
            var userShop = result;
            shopCart.find({}, function (err, result) {
                if (err) {
                    throw err;
                }
                if (result.length != 0) {
                    var userShopCart = result;
                    var userList = {
                        id: userId,
                        name: userName,
                        password: userPaw,
                        email: userEmail,
                        grade: userGrade,
                        shopCart: userShopCart,
                        orderDetail: orderDetail
                    };
                    userMessage.update({ id: userId }, { $set: userList }, function (err) {
                        if (err) {
                            throw err;
                        }
                        userMessage.find({ id: userId }, function (err, result) {
                            if (err) {
                                throw err;
                            }
                            res.status(200).json(result);
                        });
                    });
                } else {
                    res.status(200).json(userShop);
                }
            });
        }
    });
});

//获取商品订单详情
router.get('/shopDetail', function (req, res) {
    var orderId = req.query.orderId;
    var userId = req.query.userId;
    userMessage.find({ id: userId }, function (err, result) {
        if (err) {
            throw err;
        }
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = result[0].shopCart[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var item = _step3.value;

                if (item.id == orderId) {
                    res.status(200).json(item);
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    });
});

//进入账户设置
router.get('/toUserSet', function (req, res) {
    var userId = req.query.id;
    userMessage.find({ id: userId }, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    });
});

//登录 注册
router.get('/login', function (req, res) {
    res.render('login');
});
router.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    userMessage.find({
        name: name,
        password: password
    }, function (err, result) {
        if (err) {
            throw err;
        }
        var length = result.length;
        if (length == 0) {
            res.status(200).json({
                m: 0,
                msg: '用户名或密码错误'
            });
        } else {
            res.status(200).json({ m: 1, id: result[0].id });
        }
    });
});
router.get('/register', function (req, res) {
    res.render('register');
});
router.get('/getUserId', function (req, res) {
    var id = req.query.id;
    userMessage.find({ id: id }, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200).json(result[0].name);
    });
});

router.post('/register', function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.password;
    var grade = req.body.grade;
    userMessage.find({
        name: name
    }, function (err, result) {
        if (err) {
            throw err;
        }
        var length = result.length;
        console.log(length);
        if (length == 0) {
            userMessage.create({
                id: id,
                name: name,
                email: email,
                password: pwd,
                grade: grade
            }, function (err) {
                if (err) {
                    throw err;
                }
                res.status(200).json({ m: 1 });
            });
        } else {
            res.status(200).json({
                m: 0,
                msg: '用户名已存在'
            });
        }
    });
});

//提交订单
//修改地址
router.post('/paySite', function (req, res) {
    var userId = req.body.userId;
    userSite.create(req.body, function (err) {
        if (err) {
            throw err;
        }
        userSite.find({}, function (err, result) {
            if (err) {
                throw err;
            }
            var userSite = result;
            userMessage.find({ id: userId }, function (err, result) {
                if (err) {
                    throw err;
                }
                var name = result[0].name;
                var email = result[0].email;
                var password = result[0].password;
                var grade = result[0].grade;
                var shopCart = result[0].shopCart;
                var orderDetail = result[0].orderDetail;
                var user = {
                    id: userId,
                    name: name,
                    email: email,
                    password: password,
                    grade: grade,
                    shopCart: shopCart,
                    userSite: userSite,
                    orderDetail: orderDetail
                };
                userMessage.update({ id: userId }, { $set: user }, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log('用户地址添加成功');
                    userMessage.find({ id: userId }, function (err, result) {
                        if (err) {
                            throw err;
                        }
                        res.status(200).json(result[0].userSite);
                    });
                });
            });
        });
    });
});

router.post('/goSiteChange', function (req, res) {
    console.log(req.body);
});

module.exports = router;
