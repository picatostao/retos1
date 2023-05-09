import { Mobile } from "./mobile";
let miTelefono=new Mobile("Samsung", "Galaxy","tab2","azul",200)

console.log(miTelefono.getName())
console.log(miTelefono.getTradeM())
console.log(miTelefono.getModel())
console.log(miTelefono.getColor())
console.log(miTelefono.getPrice())


miTelefono.setName("siemens")
miTelefono.setTradeM("siemens")
miTelefono.setModel("c45")
miTelefono.setColor("azul")
miTelefono.setPrice(20)

console.log("cambios ",miTelefono.getName())
console.log("cambios ",miTelefono.getTradeM())
console.log("cambios ",miTelefono.getModel())
console.log("cambios ",miTelefono.getColor())
console.log("cambios ",miTelefono.getPrice())

console.log("the characteristics of the mobile name are")
console.log("name:",miTelefono.getName())
console.log("trademark: ",miTelefono.getTradeM())
console.log("model:",miTelefono.getModel())
console.log("color:",miTelefono.getColor())
console.log("price:",miTelefono.getPrice())

let miTelefono1=new Mobile("Sony","Sony","x5","azul",250)
let miTelefono2=new Mobile("alcatel","alcatel","c39","verde",120)
let mitelefono3=new Mobile("nokia","nokia","3310","gris acero",50)
let telefonos:Mobile[]=[miTelefono1,miTelefono2,mitelefono3]

for (let mobile of telefonos){
    mobile.printAll()
}

