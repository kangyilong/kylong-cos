'use strict';

$(function () {
    //定义组件
    var all = Vue.component('all', {
        template: '#electronics-all',
        data: function data() {
            return {
                allElectronics: [{
                    img: './images/all/1495851624.jpg',
                    tit: '坚果Pro',
                    txt: '',
                    price: '1499.00元'
                }, {
                    img: './images/all/1495701956.jpg',
                    tit: '矩形孔入耳式耳机',
                    txt: '',
                    price: '149.00元'
                }, {
                    img: './images/all/1494318188.jpg',
                    tit: '车载充电器',
                    txt: '铝合金机身 智能调节',
                    price: '249.00元'
                }, {
                    img: './images/all/1495780766.jpg',
                    tit: '官方T恤',
                    txt: '100%进口 SUMPIMA棉',
                    price: '149.00元'
                }, {
                    img: './images/all/1494318045.jpg',
                    tit: '入耳式耳机',
                    txt: '卓越发音 三按键线控',
                    price: '199.00元'
                }, {
                    img: './images/all/1495614880.jpg',
                    tit: '钢化玻璃手感膜',
                    txt: '',
                    price: '49.00元'
                }, {
                    img: './images/all/1494317248.jpg',
                    tit: '智能蓝牙无限降噪耳机',
                    txt: '手势触控 强力降噪',
                    price: '199.00元'
                }, {
                    img: './images/all/1494318266.jpg',
                    tit: '快充移动电源',
                    txt: '双向快充 轻盈便携',
                    price: '128.00元'
                }]
            };
        },

        methods: {
            allEleId: function allEleId(index) {
                var i = 0;
                if (index == 0) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = $('.shop-single-li')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            $(item).attr('allid', i);
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
                }
            }
        }
    });
    var hot = Vue.component('hot', {
        template: '#electronics-hot',
        data: function data() {
            return {
                hotShop: [{
                    img: './images/all/1495851624.jpg',
                    tit: '坚果Pro',
                    txt: '',
                    price: '1499.00元'
                }, {
                    img: './images/all/1495614880.jpg',
                    tit: '钢化玻璃手感膜',
                    txt: '',
                    price: '49.00元'
                }]
            };
        },

        methods: {
            hotEleId: function hotEleId(index) {
                if (index == 0) {
                    $('.shop-single-li').eq(0).attr('allid', 0);
                    $('.shop-single-li').eq(1).attr('allid', 5);
                }
            }
        }
    });
    var mon = Vue.component('mon', {
        template: '#electronics-mon',
        data: function data() {
            return {
                monShop: [{
                    img: './images/all/1495701956.jpg',
                    tit: '矩形孔入耳式耳机',
                    txt: '',
                    price: '149.00元'
                }, {
                    img: './images/all/1494318045.jpg',
                    tit: '入耳式耳机',
                    txt: '卓越发音 三按键线控',
                    price: '199.00元'
                }, {
                    img: './images/all/1494317248.jpg',
                    tit: '智能蓝牙无限降噪耳机',
                    txt: '手势触控 强力降噪',
                    price: '199.00元'
                }]
            };
        },

        methods: {
            monEleId: function monEleId(index) {
                if (index == 0) {
                    $('.shop-single-li').eq(0).attr('allid', 1);
                    $('.shop-single-li').eq(1).attr('allid', 4);
                    $('.shop-single-li').eq(2).attr('allid', 6);
                }
            }
        }
    });
    var par = Vue.component('par', {
        template: '#electronics-par',
        data: function data() {
            return {
                parShop: [{
                    img: './images/all/1494318188.jpg',
                    tit: '车载充电器',
                    txt: '铝合金机身 智能调节',
                    price: '249.00元'
                }, {
                    img: './images/all/1494318266.jpg',
                    tit: '快充移动电源',
                    txt: '双向快充 轻盈便携',
                    price: '128.00元'
                }, {
                    img: './images/all/1495611390.jpg',
                    tit: '影子无线耳机',
                    txt: '这是耳机的方式应该是,像你一样好。影子特征',
                    price: '399.00元'
                }]
            };
        },

        methods: {
            parEleId: function parEleId(index) {
                if (index == 0) {
                    $('.shop-single-li').eq(0).attr('allid', 2);
                    $('.shop-single-li').eq(1).attr('allid', 7);
                    $('.shop-single-li').eq(2).attr('allid', 8);
                }
            }
        }
    });
    var pro = Vue.component('pro', {
        template: '#electronics-pro',
        data: function data() {
            return {
                proShop: [{
                    img: './images/all/1495780766.jpg',
                    tit: '官方T恤',
                    txt: '100%进口 SUMPIMA棉',
                    price: '149.00元'
                }]
            };
        },

        methods: {
            proEleId: function proEleId(index) {
                if (index == 0) {
                    $('.shop-single-li').eq(0).attr('allid', 3);
                }
            }
        }
    });
    var nextAll = Vue.component('nextAll', {
        template: '#next-all',
        data: function data() {
            return {
                nextAllShop: [{
                    img: './images/all/1495611390.jpg',
                    tit: '影子无线耳机',
                    txt: '这是耳机的方式应该是,像你一样好。影子特征',
                    price: '399.00元'
                }]
            };
        },

        methods: {
            nextEleId: function nextEleId(index) {
                if (index == 0) {
                    $('.shop-single-li').eq(0).attr('allid', 8);
                }
            }
        }
    });

    //定义路由组
    var routes = [{
        path: '/',
        redirect: "/home"
    }, {
        path: '/home',
        component: all
    }, {
        path: '/phoneHot',
        component: hot
    }, {
        path: '/monitor',
        component: mon
    }, {
        path: '/phoneParts',
        component: par
    }, {
        path: '/products',
        component: pro
    }, {
        path: '/nextAll',
        component: nextAll
    }];

    //声明路由实例
    var router = new VueRouter({
        routes: routes,
        linkActiveClass: 'select-to-link'
    });

    new Vue({
        el: '.electronics',
        router: router
    });
});
