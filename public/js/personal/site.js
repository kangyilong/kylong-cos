'use strict';

$(function () {
    var time = new Date();
    var key = true,
        isNo = false,
        i = 0;
    $('.add').click(function () {
        $('.name').attr('placeholder', '收货人姓名');
        $('.phone').attr('placeholder', '收货人电话');
        $('.site-sel').children().eq(0).prop('selected', true);
        $('textarea').attr('placeholder', '详细地址');
        var id = time.getTime();
        $('.add-site-body').css('display', 'block');
        sessionStorage.setItem('siteID', id);
        isNo = true;
    });
    $('.glyphicon-remove').click(function () {
        $('.add-site-body').css('display', 'none');
    });

    $('.rem-btn').click(function () {
        $('.add-site-body').css('display', 'none');
    });

    $('.form-control').blur(function () {
        var num = $(this).val();
        if (num === '') {
            $(this).next().css({
                opacity: 1,
                visibility: 'visible'
            });
        }
        if (num !== '') {
            $(this).next().css({
                opacity: 0,
                visibility: 'hidden'
            });
        }
    });
    $('.phone').blur(function () {
        var num = $(this).val();
        if (num.search(/^\d{4,11}$/) === -1) {
            $(this).next().css({
                opacity: 1,
                visibility: 'visible'
            }).html('号码格式不正确');
            key = false;
        } else {
            key = true;
        }
        if (num === '') {
            $(this).next().css({
                opacity: 1,
                visibility: 'visible'
            }).html('此项不能为空');
        }
    });
    $('.site-sel').blur(function () {
        if ($('.site-sel option:selected').attr('value') == '') {
            $(this).next().css({
                opacity: 1,
                visibility: 'visible'
            });
        } else {
            $(this).next().css({
                opacity: 0,
                visibility: 'hidden'
            });
        }
    });

    $('#myForm').submit(function () {
        var name = $('.name').val();
        var phone = $('.phone').val();
        var site = $('.site-sel option:selected').val();
        var text = $('textarea').val();
        var id = sessionStorage.getItem('siteID');
        var userId = sessionStorage.getItem('userID');

        if (name === '') {
            $('.form-control-label').eq(0).css({
                opacity: 1,
                visibility: 'visible'
            });
        }
        if (phone === '') {
            $('.form-control-label').eq(1).css({
                opacity: 1,
                visibility: 'visible'
            });
        }
        if (text === '') {
            $('.form-control-label').eq(3).css({
                opacity: 1,
                visibility: 'visible'
            });
        }
        if (name && phone && site && text && key) {
            var user = {
                id: id,
                userId: userId,
                name: name,
                phone: phone,
                site: site,
                text: text
            };
            if (isNo) {
                $.post('/user', user, function (data) {
                    window.location.href = '/site';
                });
            } else {
                $.post('/userChange', user, function (data) {
                    window.location.href = '/site';
                });
            }
            $('.add-site-body').css('display', 'none');
            return;
        }
        return false;
    });
});
//设置id
function changeSite(id, name, phone, site, text) {
    sessionStorage.setItem('siteID', id);
    $('.name').attr('placeholder', name);
    $('.phone').attr('placeholder', phone);
    $('.site-sel').val(site);
    $('textarea').attr('placeholder', text);
    $('.add-site-body').css('display', 'block');
}
//删除指定地址
function remSite(index, id) {
    var userId = sessionStorage.getItem('userID');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = $('.rem')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var siteId = $(item).attr('data_id');
            if (siteId == id) {
                $(item).remove();
            }
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

    $.get('/remSite?id=' + id + '&userId=' + userId, function (data) {});
}
