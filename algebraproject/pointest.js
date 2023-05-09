"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var punto = new point_1.Point(3, 1);
console.log(punto.getx(), punto.gety());
console.log(punto.toString());
punto.setx(2);
punto.sety(2);
console.log(punto.getx(), punto.gety());
