"use strict";

$(function () {
    new Vue({
        el: ".join-list-body",
        data: function data() {
            return {
                join: []
            };
        },
        methods: {
            loads: function loads() {
                var i = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = $(".join-list-body-one")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        $(item).attr("num", i);
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
            },
            dianji: function dianji(e) {
                var id = $(e.currentTarget).attr("num");
                $(".join-hide").eq(id).slideToggle();
                $(".join-php").eq(id).find("i").toggle();
            },
            shenqing: function shenqing() {
                $(".join-box-up").toggle();
                $("body").css("overflow-y", "hidden");
            }
        }
    });
});
