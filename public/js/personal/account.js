"use strict";

$(function () {
    var geren = Vue.component("geren", {
        template: "#geren",
        data: function data() {
            return {
                user: []
            };
        },
        mounted: function mounted() {
            var _this = this;

            //获取用户资料
            var id = sessionStorage.getItem('userID');
            $.get('/toUserSet?id=' + id, function (data) {
                _this.user = data;
            });
        }
    });
    var zhanghao = Vue.component("zhanghao", {
        template: "#zhanghao"
    });

    var routes = [{
        path: "/",
        redirect: "/geren"
    }, {
        path: "/geren",
        component: geren
    }, {
        path: "/zhanghao",
        component: zhanghao
    }];

    var router = new VueRouter({
        routes: routes,
        linkActiveClass: "active"
    });

    new Vue({
        el: ".user",
        router: router,
        data: {
            userMessage: []
        },
        methods: {
            exit: function exit() {
                sessionStorage.setItem('isNo', -1);
                this.$http.get('/userExit').then(function (res) {});
            }
        },
        mounted: function mounted() {
            var _this2 = this;

            //获取用户资料
            var id = sessionStorage.getItem('userID');
            $.get('/toUserSet?id=' + id, function (data) {
                _this2.userMessage = data;
            });
        }
    });
});

$(function () {
    // 更多资料
    $(".file-close").click(function () {
        $(this).siblings(".file-body").find("img").hide();
    });
    $(".file-choose").click(function () {
        $(this).parent(".btn-file").siblings(".file-kuang").find("img").hide();
    });

    function readFile(inputObj) {
        //获取file对象
        var fileObj = inputObj.files[0];

        //判断类型
        if (fileObj.type.search(/^image\/*/) != -1) {
            //读取图片
            readImage(fileObj);
        } else if (fileObj.type.search(/^text\/*/) != -1) {
            //读取文本
            readText(fileObj);
        } else {
            alert("无法读取该文件类型");
        }
    }
    //读取照片
    function readImage(file) {
        var fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function () {
            var img = new Image();
            img.src = fr.result;
            document.getElementById("readimg").appendChild(img);
        };
    }

    //回到顶部
    $(window).scroll(function () {
        if ($('body').scrollTop() > 300) {
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
