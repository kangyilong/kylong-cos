'use strict';

//页面底部
$(function () {
    new Vue({
        el: '.foo-box',
        data: {
            isNo: false,
            fooList: [{
                h4: ['关于公司', '/dcl/company/'],
                li01: ['公司简介', '/dcl/company/'],
                li02: ['线上反馈', '/dcl/company#/xianshang'],
                li03: ['加入我们', '/dcl/join'],
                li04: ['联系我们', '/dcl/contact']
            }, {
                h4: ['最新活动', ''],
                li01: ['配件周边', '/accessoryRim'],
                li02: ['热门产品', ''],
                li03: ['线下聚会', '/ksy/upline'],
                li04: ['旅行活动', '/ksy/travel']
            }, {
                h4: ['电子产品', '/shopElectronics'],
                li01: ['热门手机', '/shopElectronics#/phoneHot'],
                li02: ['耳机音响', '/shopElectronics#/monitor'],
                li03: ['手机配件', '/shopElectronics#/phoneParts'],
                li04: ['周边产品', '/shopElectronics#/products']
            }, {
                h4: ['新闻中心', '/ksy/new-center'],
                li01: ['新闻动态', '/ksy/new_center#/news'],
                li02: ['官网新闻', '/ksy/new_center#/guan'],
                li03: ['最新资讯', '/ksy/new_center#/zixun'],
                li04: ['图片展示', '/ksy/new_center#/imgshow']
            }, {
                h4: ['关注我们', ''],
                li01: ['客服 QQ', ''],
                li02: ['新浪微博', ''],
                li03: ['官方微信', ''],
                li04: ['官方邮箱', '']
            }]
        },
        methods: {
            icon: function icon(index) {
                if (index == 4) {
                    var i = 0;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = $('.left-list').eq(4).children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            (function () {
                                switch (i) {
                                    case 0:
                                        $(item).children().children().eq(0).addClass('icon-QQ');
                                        break;
                                    case 1:
                                        $(item).children().children().eq(0).addClass('icon-iconfontweibowukuang-copy');
                                        $(item).children().mouseenter(function () {
                                            $(this).css('color', '#eb7350');
                                        }).mouseleave(function () {
                                            $(this).css('color', '#969696');
                                        });
                                        break;
                                    case 2:
                                        var j = 0;
                                        $(item).children().children().eq(0).addClass('icon-weixin');
                                        $(item).children().mouseenter(function () {
                                            var _iteratorNormalCompletion2 = true;
                                            var _didIteratorError2 = false;
                                            var _iteratorError2 = undefined;

                                            try {
                                                for (var _iterator2 = $('.foo-img')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                                    var _item = _step2.value;

                                                    if (j == 4) {
                                                        $(_item).css('display', 'block');
                                                        j = -1;
                                                    }
                                                    j++;
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

                                            ;
                                            $(this).css('color', '#609700');
                                        }).mouseleave(function () {
                                            var _iteratorNormalCompletion3 = true;
                                            var _didIteratorError3 = false;
                                            var _iteratorError3 = undefined;

                                            try {
                                                for (var _iterator3 = $('.foo-img')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                                    var _item2 = _step3.value;

                                                    if (j == 4) {
                                                        $(_item2).css('display', 'none');
                                                        j = -1;
                                                    }
                                                    j++;
                                                }
                                            } catch (err) {
                                                _didIteratorError3 = true;
                                                _iteratorError3 = err;
                                            } finally {
                                                try {
                                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                                        _iterator3.return();
                                                    }
                                                } finally {
                                                    if (_didIteratorError3) {
                                                        throw _iteratorError3;
                                                    }
                                                }
                                            }

                                            ;
                                            $(this).css('color', '#969696');
                                        });
                                        break;
                                    case 3:
                                        $(item).children().children().eq(0).addClass('icon-youjian');
                                        $(item).children().mouseenter(function () {
                                            $(this).css('color', '#354b66');
                                        }).mouseleave(function () {
                                            $(this).css('color', '#969696');
                                        });
                                        break;
                                }
                            })();

                            ;
                            i++;
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

            //y
            footerNavList: function footerNavList(index) {
                $('.left-list').eq(index).slideToggle();
            }
        }
    });
});
$(function () {
    $('.stop').click(function (ev) {
        var e = ev || window.event;
        e.stopPropagation();
    });
});
