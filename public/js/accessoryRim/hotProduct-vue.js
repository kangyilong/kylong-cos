"use strict";

$(function () {
    var All = Vue.component("All", {
        template: "#hotProductAll",
        created: function created() {
            this.$http.get("/ksy/getHotall").then(function (res) {
                this.hotDetail = res.body.hotproduct;
            });
        },

        data: function data() {
            return {
                isMore: true,
                hotDetail: []
            };
        },
        methods: {
            newId: function newId(index) {
                if (index == 0) {
                    var i = 0;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = $('.hotProduct-one')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            $(item).attr('newid', i);
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
            }
        }

    });

    var jianguo = Vue.component("jianguo", {
        template: "#hotProductAll",
        created: function created() {
            this.$http.get("/ksy/getjianguo").then(function (res) {
                this.hotDetail = res.body.hotproduct;
            });
        },

        data: function data() {
            return {
                isMore: false,
                hotDetail: []
            };
        },
        methods: {
            newId: function newId(index) {
                if (index == 0) {
                    var i = 3;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = $('.hotProduct-one')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var item = _step2.value;

                            $(item).attr('newid', i);
                            i++;
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
                }
            }
        }

    });

    var T2 = Vue.component("T2", {
        template: "#hotProductAll",
        created: function created() {
            this.$http.get("/ksy/getT2").then(function (res) {
                this.hotDetail = res.body.hotproduct;
            });
        },

        data: function data() {
            return {
                isMore: false,
                hotDetail: []
            };
        },
        methods: {
            newId: function newId(index) {
                if (index == 0) {
                    var i = 2;
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = $('.hotProduct-one')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var item = _step3.value;

                            $(item).attr('newid', i);
                            i++;
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
                }
            }
        }

    });

    var M1 = Vue.component("M1", {
        template: "#hotProductAll",
        created: function created() {
            this.$http.get("/ksy/getM1").then(function (res) {
                this.hotDetail = res.body.hotproduct;
            });
        },

        data: function data() {
            return {
                isMore: false,

                hotDetail: []
            };
        },
        methods: {
            newId: function newId(index) {
                if (index == 0) {
                    var i = 1;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = $('.hotProduct-one')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var item = _step4.value;

                            $(item).attr('newid', i);
                            i++;
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            }
        }

    });

    var Pro = Vue.component("Pro", {
        template: "#hotProductAll",
        created: function created() {
            this.$http.get("/ksy/getPro").then(function (res) {
                this.hotDetail = res.body.hotproduct;
            });
        },

        data: function data() {
            return {
                isMore: false,

                hotDetail: []
            };
        },
        methods: {
            newId: function newId(index) {
                if (index == 0) {
                    var i = 4;
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = $('.hotProduct-one')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var item = _step5.value;

                            $(item).attr('newid', i);
                            i++;
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                }
            }
        }
    });

    var routes = [{
        path: '/',
        redirect: '/hotAll'
    }, {
        //name代表组件的名称
        path: "/hotAll",
        component: All

    }, {
        path: "/jianguo",
        component: jianguo
    }, {
        path: "/T2",
        component: T2
    }, {
        path: "/M1",
        component: M1
    }, {
        path: "/Pro",
        component: Pro
    }];

    var router = new VueRouter({
        routes: routes
    });

    new Vue({
        el: ".box",
        router: router
    });
});
