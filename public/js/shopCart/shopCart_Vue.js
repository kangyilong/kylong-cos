'use strict';

$(function () {
    new Vue({
        el: '.shopDetail',
        data: {
            num: 0,
            shopCart: [{
                phoneImg: [],
                shopDetails: [],
                content: {}
            }],
            sidebarImg: [{
                img: './images/index/1495851624.jpg',
                title: '坚果Pro',
                price: '1499.00元'
            }, {
                img: './images/index/1495701956.jpg',
                title: '矩形孔入耳式耳机',
                price: '149.00元'
            }, {
                img: './images/index/1494318188.jpg',
                title: '车载充电器',
                price: '249.00元'
            }, {
                img: './images/index/1494317057.jpg',
                title: '官方T恤',
                price: '149.00元'
            }, {
                img: './images/index/1495780766.jpg',
                title: '官方T恤',
                price: '149.00元'
            }]
        },
        methods: {
            pImg: function pImg() {
                //加载大图
                $('.phone-single').children().eq(0).addClass('show-img');
                $('.shopCart-phone').children().eq(0).addClass('sel');
                $('.shopCart-phone').eq(0).addClass('sel-img');
            },
            sImg: function sImg(index) {
                //小图点击
                var i = 0;
                $('.phone-single').children().eq(index).addClass('show-img').siblings().removeClass('show-img');
                $('.shopCart-phone').eq(index).addClass('sel-img').siblings().removeClass('sel-img');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = $('.shopCart-phone img')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (i == index) {
                            $(item).addClass('sel');
                        } else {
                            $(item).removeClass('sel');
                        }
                        i++;
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

                this.num = index;
            },
            changeLeft: function changeLeft() {
                //左点击
                var i = 0;
                if (this.num > 0) {
                    $('.phone-single').children().eq(this.num - 1).addClass('show-img').siblings().removeClass('show-img');
                    $('.shopCart-phone').eq(this.num - 1).addClass('sel-img').siblings().removeClass('sel-img');
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = $('.shopCart-phone img')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var item = _step2.value;

                            if (i == this.num - 1) {
                                $(item).addClass('sel');
                            } else {
                                $(item).removeClass('sel');
                            }
                            i++;
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

                    this.num--;
                }
                if (this.num < 0) {
                    this.num == 0;
                }
            },
            changeRight: function changeRight() {
                //右点击
                var i = 0;
                if (this.num < 5 && this.num >= 0) {
                    $('.phone-single').children().eq(this.num + 1).addClass('show-img').siblings().removeClass('show-img');
                    $('.shopCart-phone').eq(this.num + 1).addClass('sel-img').siblings().removeClass('sel-img');
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = $('.shopCart-phone img')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var item = _step3.value;

                            if (i == this.num + 1) {
                                $(item).addClass('sel');
                            } else {
                                $(item).removeClass('sel');
                            }
                            i++;
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

                    this.num++;
                };
                if (this.num >= i) {
                    this.num = i - 1;
                };
            },
            subShop: function subShop() {
                //减商品数量
                var num = $('.input').val();
                if ($('.input').val() > 1) {
                    num--;
                } else {
                    num = 1;
                }
                $('.input').val(num);
                var id = sessionStorage.getItem('id');
                this.$http.post('/changeShop', {
                    id: id,
                    value: num
                }).then(function (res) {});
            },
            addShop: function addShop() {
                //加商品数量
                var num = $('.input').val();
                num++;
                $('.input').val(num);
                var id = sessionStorage.getItem('id');
                this.$http.post('/changeShop', {
                    id: id,
                    value: num
                }).then(function (res) {});
            },

            //给其他商品添加ID
            restTo: function restTo(index) {
                if (index == 0) {
                    $('.mob-single').eq(0).attr('restId', 0);
                    $('.mob-single').eq(1).attr('restId', 1);
                    $('.mob-single').eq(2).attr('restId', 2);
                    $('.mob-single').eq(3).attr('restId', 9);
                    $('.mob-single').eq(4).attr('restId', 3);

                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = $('.mob-single')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var item = _step4.value;

                            $(item).click(function () {
                                var id = $(this).attr('restid');
                                sessionStorage.setItem('id', id);
                                window.location.href = './shopCart';
                            });
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            },

            //加入到购物车,存储到数据库
            addShopCart: function addShopCart() {
                var value = $('.input').val();
                var isNo = sessionStorage.getItem('isNo');
                var userId = sessionStorage.getItem('userID');
                if (isNo == 0) {
                    this.$http.post('/upDateShop', {
                        userId: userId,
                        value: value,
                        id: this.shopCart[0].id,
                        img: this.shopCart[0].phoneImg[0].img,
                        title: this.shopCart[0].content.title,
                        txt: this.shopCart[0].content.txt,
                        price: this.shopCart[0].content.price
                    }).then(function (res) {
                        window.location.href = './addShopCart';
                    });
                } else {
                    $('.alertify').css('display', 'block');
                }
            },
            collect: function collect(ev) {
                var id = sessionStorage.getItem('id');
                var e = ev || window.event;
                if (e && e.preventDefault) {
                    e.preventDefault();
                } else {
                    window.event.returnValue = false;
                }
                if ($('.collect').hasClass('btn-warning')) {
                    $('.collect').removeClass('btn-warning').addClass('btn-success').text('已收藏');
                    this.$http.get('/collectShop?id=' + id).then(function (res) {});
                } else {
                    $('.collect').addClass('btn-warning').removeClass('btn-success').text('加入收藏');
                    this.$http.get('/reCollect?id=' + id).then(function (res) {});
                }
            },
            cancel: function cancel() {
                $('.alertify').css('display', 'none');
            },
            toLogin: function toLogin() {
                sessionStorage.setItem('toLogin', 'true');
                window.location.href = './login';
            }
        },
        //请求数据
        created: function created() {
            var id = sessionStorage.getItem("id");
            this.$http.post('/getCartData', { id: id }).then(function (res) {
                this.shopCart = res.data;
            });
            this.$http.post('/isNoCollect', { id: id }).then(function (res) {
                if (res.data == 'true') {
                    $('.collect').removeClass('btn-warning').addClass('btn-success').text('已收藏');
                } else {
                    $('.collect').addClass('btn-warning').removeClass('btn-success').text('加入收藏');
                }
            });
        },

        filters: {
            myFil: function myFil(value) {
                return value + '.00元';
            }
        }
    });
});
