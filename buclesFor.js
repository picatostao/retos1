"use strict";
////////////////////////
//     1-impares      //
////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.isRainbow = exports.myRevert = exports.evenNumbers = void 0;
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
exports.evenNumbers = evenNumbers;
////////////////////////
// 2 array revertido  //
////////////////////////
function myRevert(myArr) {
    var reverse = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        reverse.push(myArr[i]);
    }
    return myArr;
}
exports.myRevert = myRevert;
////////////////////////
//     4 arcoiris     //
////////////////////////
function isRainbow(colors) {
    var arcoiris = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        if (arcoiris.includes(color)) {
            console.log("el ", color, " está en el arcoiris");
        }
        else {
            console.log("el ", color, " NO está en el arcoiris");
        }
    }
}
exports.isRainbow = isRainbow;
//////////////////////////
// 5 suma de caracteres //
//////////////////////////
function add(myWords) {
    var sum = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var letras = myWords_1[_i];
        sum += letras.length;
    }
    return sum;
}
exports.add = add;
