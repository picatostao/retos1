"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var miTelefono = new mobile_1.Mobile("Samsung", "Galaxy", "tab2", "azul", 200);
console.log(miTelefono.getName());
console.log(miTelefono.getTradeM());
console.log(miTelefono.getModel());
console.log(miTelefono.getColor());
console.log(miTelefono.getPrice());
miTelefono.setName("siemens");
miTelefono.setTradeM("siemens");
miTelefono.setModel("c45");
miTelefono.setColor("azul");
miTelefono.setPrice(20);
console.log("cambios ", miTelefono.getName());
console.log("cambios ", miTelefono.getTradeM());
console.log("cambios ", miTelefono.getModel());
console.log("cambios ", miTelefono.getColor());
console.log("cambios ", miTelefono.getPrice());
console.log("the characteristics of the mobile name are");
console.log("name:", miTelefono.getName());
console.log("trademark: ", miTelefono.getTradeM());
console.log("model:", miTelefono.getModel());
console.log("color:", miTelefono.getColor());
console.log("price:", miTelefono.getPrice());
var miTelefono1 = new mobile_1.Mobile("Sony", "Sony", "x5", "azul", 250);
var miTelefono2 = new mobile_1.Mobile("alcatel", "alcatel", "c39", "verde", 120);
var mitelefono3 = new mobile_1.Mobile("nokia", "nokia", "3310", "gris acero", 50);
var telefonos = [miTelefono1, miTelefono2, mitelefono3];
for (var _i = 0, telefonos_1 = telefonos; _i < telefonos_1.length; _i++) {
    var mobile = telefonos_1[_i];
    mobile.printAll();
}
