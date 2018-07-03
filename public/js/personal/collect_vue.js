'use strict';

$(function () {
    new Vue({
        el: '.shop-collect-list',
        data: {
            shopList: []
        },
        methods: {
            //删除收藏
            reShop: function reShop(index, id) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = $('.collect-single')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if ($(item).attr('data_id') == id) {
                            $(item).remove();
                            this.$http.get('/reCollect?id=' + id).then(function (res) {});
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
            },

            //购买
            toShopCart: function toShopCart(id) {
                sessionStorage.setItem('id', id);
                window.location.href = '/shopCart';
            }
        },
        mounted: function mounted() {
            var _this = this;

            this.$http.get('/getCollect').then(function (res) {
                _this.shopList = res.data;
            });
        }
    });
});
