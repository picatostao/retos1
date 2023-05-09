import { Point } from "./point";

let punto= new Point (3,1)
console.log(punto.getx (), punto.gety())
console.log(punto.toString())
punto.setx(2)
punto.sety(2)
console.log(punto.getx (), punto.gety())



let punto1=new Point(4,2)
let punto2=new Point(5,1)
let puntoOrigen=punto1.distanceToOrigin()
let puntoApunto=punto.calculateDistance(punto2)
console.log("punto a origen  ",puntoOrigen)
console.log("distancia entre puntos", puntoApunto)

let point0=new Point(0,0)
let point1=new Point(1,1)
let point2=new Point(-1,1)
let point3=new Point(-1,-1)
let point4=new Point(1,-1)
console.log(point0.calculateQuadrant())
console.log(point1.calculateQuadrant())
console.log(point2.calculateQuadrant())
console.log(point3.calculateQuadrant())
console.log(point4.calculateQuadrant())