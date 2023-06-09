"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var punto = new point_1.Point(3, 1);
console.log(punto.getx(), punto.gety());
console.log(punto.toString());
punto.setx(2);
punto.sety(2);
console.log(punto.getx(), punto.gety());
var punto1 = new point_1.Point(4, 2);
var punto2 = new point_1.Point(5, 1);
var puntoOrigen = punto1.distanceToOrigin();
var puntoApunto = punto.calculateDistance(punto2);
console.log("punto a origen  ", puntoOrigen);
console.log("distancia entre puntos", puntoApunto);
var point0 = new point_1.Point(0, 0);
var point1 = new point_1.Point(1, 1);
var point2 = new point_1.Point(-1, 1);
var point3 = new point_1.Point(-1, -1);
var point4 = new point_1.Point(1, -1);
console.log(point0.calculateQuadrant());
console.log(point1.calculateQuadrant());
console.log(point2.calculateQuadrant());
console.log(point3.calculateQuadrant());
console.log(point4.calculateQuadrant());
var punto5 = new point_1.Point(3, 2);
var ArrPuntos = [
    new point_1.Point(2, 2),
    new point_1.Point(5, 4),
    new point_1.Point(3, 3),
    new point_1.Point(8, 6)
];
var cercano = punto5.calcularNearest(ArrPuntos);
console.log("el punto mas cercano es ", cercano);
