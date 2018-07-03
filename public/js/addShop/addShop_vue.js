'use strict';

$(function () {

    new Vue({
        el: '.shop-page',
        data: {
            sum: 0,
            num: 0,
            shopSingle: [],
            shopList: [],
            shopAll: [],
            price: 0,
            shopTotal: 0
        },
        methods: {
            //商品更多进入购物车
            toShop: function toShop(index) {
                if (index == 0) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = $('.single-body')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            $(item).click(function () {
                                var id = $(this).children().eq(0).html();
                                sessionStorage.setItem('id', id);
                            });
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
            },

            //进入确定商品页面
            goSettle: function goSettle() {
                $('.panel-body').addClass('shop-hide');
                $('.settle-shop').removeClass('shop-hide');
                $('.cart-total').removeClass('shop-hide');
            },

            //增减商品
            changeShop: function changeShop(item, index) {
                if (index) {
                    item.value++;
                } else {
                    item.value--;
                    if (item.value < 1) {
                        item.value = 1;
                    }
                }
                this.total();
                this.$http.post('/changeShop', {
                    id: item.id,
                    value: item.value
                }).then(function (res) {});
                this.$http.post('/changeCart', {
                    id: item.id,
                    value: item.value
                }).then(function (res) {});
            },

            //是否选中商品
            check: function check(item, index) {
                if (item.checked == undefined) {
                    this.$set(item, 'checked', true);
                } else {
                    item.checked = !item.checked;
                }
                if (item.checked) {
                    $('.sel-ico').eq(index).addClass('icon-check-box_fill');
                    this.num++;
                } else {
                    $('.sel-ico').eq(index).removeClass('icon-check-box_fill');
                    this.num--;
                }
                this.total();
            },
            total: function total() {
                var _this = this;

                this.shopTotal = 0;
                this.shopAll.forEach(function (item, index) {
                    if (item.checked) {
                        _this.shopTotal += item.price * item.value;
                    }
                });
                if (this.sum / this.num == 1) {
                    $('.all').addClass('icon-check-box_fill');
                } else {
                    $('.all').removeClass('icon-check-box_fill');
                }
            },
            checkAll: function checkAll() {
                var _this2 = this;

                this.shopTotal = 0;
                this.shopAll.forEach(function (item) {
                    if (typeof item.checked == 'undefined') {
                        _this2.$set(item, 'checked', true);
                    } else {
                        item.checked = true;
                    }
                    if (item.checked) {
                        _this2.num = _this2.sum;
                        $('.ico').addClass('icon-check-box_fill');
                        _this2.shopTotal += item.price * item.value;
                    }
                });
            },
            callAll: function callAll() {
                var _this3 = this;

                $('.ico').removeClass('icon-check-box_fill');
                this.shopAll.forEach(function (item) {
                    if (typeof item.checked == 'undefined') {
                        _this3.$set(item, 'checked', false);
                    } else {
                        item.checked = false;
                    }
                });
                this.num = 0;
                this.shopTotal = 0;
            },

            //商品进入商品详情页
            toShopCart: function toShopCart(index, id) {
                sessionStorage.setItem('id', id);
            },
            removeShop: function removeShop(index, id) {
                var trList = $(".shop-tr");
                var userId = sessionStorage.getItem('userID');
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = trList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        if ($(item).attr('_id') == id) {
                            $(item).remove();
                            this.sum--;
                        }
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

                this.$http.get('/removeShop?id=' + id + '&userId=' + userId).then(function (res) {});
            },
            toPay: function toPay() {
                var _this4 = this;

                var num = 0,
                    sum = 0;
                var userId = sessionStorage.getItem('userID');
                this.shopAll.forEach(function (item, index) {
                    sum = index + 1;
                    item.userId = userId;
                    if (item.checked) {
                        _this4.$http.post('/saveOrder', item).then(function (res) {
                            window.location.href = '/goPay';
                        });
                    } else {
                        num++;
                    }
                });
                if (num == sum) {
                    alert('请选择商品');
                }
            }
        },
        created: function created() {
            var _this5 = this;

            //获取添加到购物车的全部商品
            var userId = sessionStorage.getItem('userID');
            this.$http.get('/shopAll?id=' + userId).then(function (res) {
                _this5.shopAll = res.data;
                _this5.shopAll.forEach(function (item, index) {
                    _this5.sum = index + 1;
                });
            });
            //判断是否登录
            this.$http.get('/addShopCart').then(function (res) {});
        },
        mounted: function mounted() {
            var _this6 = this;

            this.$http.get('/getShopData').then(function (res) {
                _this6.shopList = res.data;
            });

            //自动匹配商品
            var id = sessionStorage.getItem('id');
            this.$http.post('/storeShop', { id: id }).then(function (res) {
                _this6.shopSingle = res.data[0];
            });

            //总价
        },

        filters: {
            filPrice: function filPrice(value) {
                return value + '.00元';
            }
        }
    });
});
