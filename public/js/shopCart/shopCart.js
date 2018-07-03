'use strict';

$(function () {
    $(window).scroll(function (event) {
        if ($('body,html').scrollTop() == 0) {
            if ($('body').scrollTop() > 300) {
                var src = $('.shop-panel-detail').attr('data_src');
                $('.shop-panel-detail').attr('src', src);
                var arrImg = $.makeArray($('.mob-img img'));
                arrImg.forEach(function (item) {
                    var list_src = $(item).attr('data_src');
                    $(item).attr('src', list_src);
                });
            };
        }
        if ($('body,html').scrollTop() > 300) {
            var _src = $('.shop-panel-detail').attr('data_src');
            $('.shop-panel-detail').attr('src', _src);
            var _arrImg = $.makeArray($('.mob-img img'));
            _arrImg.forEach(function (item) {
                var list_src = $(item).attr('data_src');
                $(item).attr('src', list_src);
            });
        };
    });
});
