'use strict';

$(function () {
    var chId = '';
    //添加地址
    $(".acceptAdress-list-one-box").mouseenter(function () {
        $(this).children('i').show();
    });

    $(".acceptAdress-list-one-box").mouseleave(function () {
        if ($(this).hasClass('is')) {
            $(this).children('i').show();
        } else {
            $(this).children('i').hide();
        }
    });

    $(".acceptAdress-list-one-box").click(function () {
        $(this).children('i').show();
        $(this).addClass("is");
        $(this).parent(".acceptAdress-list-one").siblings().find("i").hide();
        $(this).parent(".acceptAdress-list-one").siblings().find(".acceptAdress-list-one-box").removeClass("is");
    });

    //编辑地址
    var clickI = $.makeArray($(".adress-editor"));
    clickI.forEach(function (item, index) {
        chId = $(item).data('id');
        $(item).click(function () {
            // 获取地址具体内容
            var username = $(item).prev('h4').html(); //姓名
            var number = $(item).next('.acceptAdress-list-one-call').html(); //电话
            var province = $(item).nextAll('.acceptAdress-list-one-adress').children().eq(0).html(); //省
            var urban = $(item).nextAll('.acceptAdress-list-one-adress').children().eq(1).html(); //市
            // 编辑模态框中表格的内容
            $(".site-username").val(username);
            $(".site-number").val(number);
            $(".sheng").children('option[value=' + province + ']').prop("selected", 'selected');
            $(".form-txt").val(urban);
        });
    });
    // $(".adress-editor").click(function(){

    //     var i = $(this).data("id");


    //表单验证正则
    //添加地址的
    $(".addbtn").click(function () {
        $("form").find(".none").css("display", "none");
        $("form").find("input").css("border-color", "#ccc");
    });

    $('.username1').keyup(function () {
        //姓名
        if ($(".username1").val() == "") {
            $(".username1").css("border-color", "red");
            $(".username1").siblings(".none").css("display", "block");
            return false;
        } else {
            $(".username1").css("border-color", "#ccc");
            $(".username1").siblings(".none").css("display", "none");
            return true;
        }
    });

    $(".number1").keyup(function () {
        //电话
        if ($(".number1").val() == "") {
            $(".number1").css("border-color", "red");
            $(".number1").siblings(".none").css("display", "block");
            return false;
        } else {
            $(".number1").css("border-color", "#ccc");
            $(".number1").siblings(".none").css("display", "none");
            return true;
        }
    });

    $(".addsave").click(function () {
        var time = new Date();
        var id = time.getTime();
        var name = $('.username1').val();
        var phone = $('.number1').val();
        var site = $('.form-control option:selected').attr('value');
        var text = $('.text1').val();
        var userId = sessionStorage.getItem('userID');
        if (name && phone && site && text) {
            $.post('/user', {
                id: id,
                name: name,
                phone: phone,
                site: site,
                text: text,
                userId: userId
            }, function (data) {
                window.location.href = '/goPay';
            });
        }
    });
    $(".change-save").click(function () {
        var name = $('.site-username').val();
        var phone = $('.site-number').val();
        var site = $('.sheng option:selected').attr('value');
        var text = $('.form-control').eq(7).val();
        var userId = sessionStorage.getItem('userID');
        if (name && phone && site && text) {
            $.post('/userChange', {
                id: chId,
                name: name,
                phone: phone,
                site: site,
                text: text
            }, function (data) {
                window.location.href = '/goPay';
            });
        }
    });
});
function toCart(id) {
    sessionStorage.setItem('id', id);
    window.location.href = '/shopCart';
}
