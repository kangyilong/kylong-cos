'use strict';

$(function () {
    new Vue({
        el: '.selfHeader-box',
        data: {
            userName: '',
            userShop: [],
            sumShop: 0,
            userTotal: 0
        },
        methods: {
            exit: function exit() {
                sessionStorage.setItem('isNo', -1);
                sessionStorage.setItem('toLogin', false);
                this.$http.get('/userExit').then(function (res) {});
            },
            toShopCart: function toShopCart(id) {
                sessionStorage.setItem('id', id);
            },
            remUserShop: function remUserShop(userShop, id) {
                var userId = sessionStorage.getItem('userID');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = $('.shopCarList-one')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if ($(item).attr('data_id') == id) {
                            $(item).remove();
                        };
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

                userShop.value = 0;
                this.calculate();
                this.$http.get('/removeShop?id=' + id + '&userId=' + userId).then(function (res) {});
            },
            calculate: function calculate() {
                this.sumShop = 0;
                this.userTotal = 0;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.userShop[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        this.sumShop += item.value;
                        this.userTotal += item.value * item.price;
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
            }
        },
        mounted: function mounted() {
            var _this = this;

            var id = sessionStorage.getItem('userID');
            //获取用户信息
            this.$http.get('/getUserId?id=' + id).then(function (res) {
                _this.userName = res.data;
            });
            //获取用户加入到购物车里的信息
            this.$http.get('/userShopCart?id=' + id).then(function (res) {
                _this.userShop = res.data[0].shopCart;
                _this.calculate();
            });
        }
    });
});

$(function () {
    $("#people-small").click(function () {
        $(".self-center").slideToggle();
        $(".selfHeader-list").hide();
        $(".changelater").toggleClass('change');
        $(".changebefore").toggle();
    });
    $("#shopcar-samll").click(function () {
        $(".selfHeader-list").slideToggle();
        $(".self-center").hide();
        $(".changelater2").toggleClass('change');
        $(".changebefore2").toggle();
    });
    $('.menu-list').click(function () {
        $(this).toggleClass('menu');
        $('.panel').slideToggle();
    });

    //回到顶部
    $(window).scroll(function () {
        if ($('body').scrollTop() > 260) {
            $('.to-top').css('display', 'block');
        } else {
            $('.to-top').fadeOut(200);
        };
    });
    $('.to-top').click(function () {
        $('body,html').animate({
            scrollTop: '0'
        }, 600);
    });
});
