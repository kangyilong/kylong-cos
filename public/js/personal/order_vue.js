'use strict';

$(function () {
    //定义组件
    var order = Vue.component('order', {
        template: '#order',
        data: function data() {
            return {
                shopAll: [],
                total: 0
            };
        },

        methods: {
            shopTotal: function shopTotal() {
                var _this = this;

                this.shopAll.forEach(function (item) {
                    _this.total += item.price * item.value;
                });
            },
            toShopCart: function toShopCart(id) {
                sessionStorage.setItem('id', id);
            },
            toDetail: function toDetail(id) {
                sessionStorage.setItem('orderId', id);
            }
        },
        mounted: function mounted() {
            var _this2 = this;

            var id = sessionStorage.getItem('userID');
            this.$http.get('/shopAll?id=' + id).then(function (res) {
                console.log(res);
                _this2.shopAll = res.data;
                _this2.shopTotal();
            });
        }
    });
    var take = Vue.component('take', {
        template: '#take'
    });
    var close = Vue.component('close', {
        template: '#close'
    });

    //定义路由组
    var routes = [{
        path: '/',
        redirect: '/order'
    }, {
        path: '/order',
        component: order
    }, {
        path: '/pay',
        component: order
    }, {
        path: '/take',
        component: take
    }, {
        path: '/close',
        component: close
    }];

    //创建路由实例
    var router = new VueRouter({
        routes: routes,
        linkActiveClass: 'sel-to'
    });

    //挂载路由
    new Vue({
        el: '.shop-order',
        router: router
    });
});
