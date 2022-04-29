"use strict";
exports.__esModule = true;
var MathEx = /** @class */ (function () {
    function MathEx() {
    }
    MathEx.IntSqrt = function (x) {
        if (x < 0)
            return NaN;
        if (x == 0)
            return 0;
        var p = this.IntSqrt(x - 1);
        if ((p + 1) * (p + 1) <= x) {
            return p + 1;
        }
        else {
            return p;
        }
    };
    MathEx.IsWithinOne = function (x, y) {
        return Math.abs(x - y) <= 1;
    };
    MathEx.IsSafeIndex = function (index, arrayLength) {
        return index >= 0 && index < arrayLength;
    };
    MathEx.IsSafeIndexArray = function (index, anyArray) {
        return index >= 0 && index < anyArray.length;
    };
    return MathEx;
}());
exports.MathEx = MathEx;
