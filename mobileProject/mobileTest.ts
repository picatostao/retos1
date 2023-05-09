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