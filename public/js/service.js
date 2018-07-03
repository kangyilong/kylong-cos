"use strict";

$(function () {
    var service = Vue.component("service", {
        template: "#service"
    });
    var buy = Vue.component("buy", {
        template: "#buy"
    });
    var hots = Vue.component("hots", {
        template: "#hots"
    });
    var yuyue = Vue.component("yuyue", {
        template: "#yuyue"
    });
    var shouhou = Vue.component("shouhou", {
        template: "#shouhou"
    });

    var routes = [{
        path: "/",
        redirect: "/service"
    }, {
        path: "/service",
        component: service
    }, {
        path: "/buy",
        component: buy
    }, {
        path: "/hots",
        component: hots
    }, {
        path: "/yuyue",
        component: yuyue
    }, {
        path: "/shouhou",
        component: shouhou
    }];

    var router = new VueRouter({
        routes: routes,
        linkActiveClass: "actives"
    });

    new Vue({
        el: "#service-link",
        router: router
    });
});
