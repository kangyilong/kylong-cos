'use strict';

$(function () {
    new Vue({
        el: '.shop-profile',
        data: {
            userMessage: [],
            shopAll: []
        },
        methods: {
            toSite: function toSite() {
                var id = sessionStorage.getItem('userID');
                this.$http.get('/site?id=' + id).then(function (res) {
                    window.location.href = '/site';
                });
            }
        },
        mounted: function mounted() {
            var _this = this;

            var id = sessionStorage.getItem('userID');
            this.$http.get('/getUserMessage?id=' + id).then(function (res) {
                _this.userMessage = res.body;
            });
            this.$http.get('/shopAll?id=' + id).then(function (res) {
                _this.shopAll = res.data;
            });
        }
    });
});
