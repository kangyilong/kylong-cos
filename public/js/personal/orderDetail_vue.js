'use strict';

$(function () {
    new Vue({
        el: '.main-right',
        data: {
            shopDetail: {},
            orderTotal: 0
        },
        methods: {
            remOrder: function remOrder() {
                var orderId = sessionStorage.getItem('orderId');
                this.$http.get('/removeShop?id=' + orderId).then(function (res) {});
            },
            toShop: function toShop(id) {
                sessionStorage.setItem('id', id);
            }
        },
        mounted: function mounted() {
            var _this = this;

            var orderId = sessionStorage.getItem('orderId');
            var userId = sessionStorage.getItem('userID');
            this.$http.get('/shopDetail?orderId=' + orderId + '&userId=' + userId).then(function (res) {
                _this.shopDetail = res.body;
                _this.orderTotal = res.body.value * res.body.price;
            });
        }
    });
});
