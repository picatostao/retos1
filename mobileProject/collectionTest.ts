import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";
let miTelefono1=new Mobile("Sony","Sony","x5","azul",250)
let miTelefono2=new Mobile("alcatel","alcatel","c39","verde",120)
let mitelefono3=new Mobile("nokia","nokia","3310","gris acero",50)
let mitelefono4=new Mobile("nokia","nokia","3310","gris acero",50)
let mistelefonos:Mobile[]=[miTelefono1,miTelefono2,mitelefono3,mitelefono4]
const myColection=new MobileCollection(mistelefonos)
console.log(myColection.getMobiles())
console.log(myColection.getCalTotal());
myColection.setCalTotal(100)
console.log(myColection.getCalTotal());


