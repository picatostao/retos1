import { Point } from "./point";
import { Triangle } from "./triangle";

let vertex1=new Point(7,3)
let vertex2=new Point(3,3)
let vertex3=new Point(7,4)

let triangulo=new Triangle(vertex1,vertex2,vertex3)
let lados=triangulo.calculateLengthSides()
console.log(lados)

