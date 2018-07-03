"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopCart");

var db = mongoose.connection;

db.on('open', function (err) {
    if (err) {
        throw err;
    }
});

//商品信息
var itemList = new mongoose.Schema({
    id: Number,
    phoneImg: Array,
    shopDetails: Array,
    content: Object
});

//加入到购物车的商品
var itemCart = new mongoose.Schema({
    id: Number,
    value: Number,
    img: String,
    title: String,
    txt: String,
    price: Number

});
//确认订单信息表
var itemOrder = new mongoose.Schema({
    id: Number,
    value: Number,
    price: Number,
    userId: Number,
    img: String,
    title: String,
    txt: String,
    checked: Boolean
});

var shopListModel = mongoose.model('shop', itemList, 'shopList');
var shopCartModel = mongoose.model('shopSingle', itemCart, 'shopCart');
var collectModel = mongoose.model('collect', itemCart, 'collectShop');
var orderModel = mongoose.model('collect', itemCart, 'userOrder');

module.exports = {
    shopList: shopListModel,
    shopCart: shopCartModel,
    collectShop: collectModel,
    userOrder: orderModel
};
