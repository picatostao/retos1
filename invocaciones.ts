import { isEven } from "./condicionales"
import { add } from "./buclesFor"
let arr1:string[]=["Casa", "Coche", "Ciudad", "Cesta"]
let arr2:string[]=["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]
let arr3:string[]=["Venezuela", "Veneno", "Voltaje"]


let sum1=add(arr1)
let sum2=add(arr2)
let sum3=add(arr3)
let par1=isEven(sum1)
let par2=isEven(sum2)
let par3=isEven(sum3)
console.log(par1)
console.log(par2);
console.log(par3);

