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

