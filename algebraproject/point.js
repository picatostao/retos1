"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getx = function () {
        return this.x;
    };
    Point.prototype.gety = function () {
        return this.y;
    };
    Point.prototype.setx = function (x) {
        this.x = x;
    };
    Point.prototype.sety = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        var distancia = Math.sqrt(this.x * this.x + this.y * this.y);
        return distancia; ///math.sqrt---raiz cuadrada
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var x1 = this.x;
        var y1 = this.y;
        var x2 = anotherPoint.getx();
        var y2 = anotherPoint.gety();
        var distance = Math.sqrt(Math.pow((x2 * x1), 2) + Math.pow((y2 - y1), 2));
        return distance;
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    Point.prototype.calcularNearest = function (points) {
        var puntocercano = points[0];
        for (var i = 1; i < points.length; i++) {
            var distanceA = this.calculateDistance(points[i]);
            var distanceB = this.calculateDistance(points[i]);
            if (distanceA < distanceB) {
                puntocercano = points[i];
            }
        }
        return puntocercano;
    };
    return Point;
}());
exports.Point = Point;
