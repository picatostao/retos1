"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalprice = this.calTotal();
    }
    MobileCollection.prototype.calTotal = function () {
        var totalprice = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            totalprice += mobile.getPrice();
        }
        return totalprice;
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        this.totalprice = this.calTotal();
    };
    MobileCollection.prototype.getCalTotal = function () {
        return this.totalprice;
    };
    MobileCollection.prototype.setCalTotal = function (totalprice) {
        this.totalprice = totalprice;
    };
    MobileCollection.prototype.printMobiles = function () {
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            mobile;
        }
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
