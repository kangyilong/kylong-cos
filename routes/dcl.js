'use strict';

var express = require('express');
var router = express.Router();
var joinData = require("../mongo/user").join;

router.get('/company', function (req, res) {
    res.render('company', { title: '公司简介' });
});
router.get('/join', function (req, res) {
    joinData.find({}, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('join', { title: '加入我们', join: result });
    });
});
router.get('/contact', function (req, res) {
    res.render('contact', { title: '联系我们' });
});
router.get('/service', function (req, res) {
    res.render('service', { title: '服务支持' });
});
router.get('/account', function (req, res) {
    res.render('account', { title: '账户设置' });
});
router.get('/password', function (req, res) {
    res.render('password', { title: '找回密码' });
});

module.exports = router;
