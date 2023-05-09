"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(nombre, trademark, modelo, color, precio) {
        this.name = nombre;
        this.trademark = trademark;
        this.model = modelo;
        this.color = color;
        this.price = precio;
        //getters
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTradeM = function () {
        return this.trademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //setters
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setTradeM = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
