"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.starWithM = exports.hasEven = void 0;
function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return true;
        }
        i++;
    }
    return false;
}
exports.hasEven = hasEven;
function starWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i].charAt(0) !== "M") {
            return false;
        }
        i++;
    }
    return true;
}
exports.starWithM = starWithM;
