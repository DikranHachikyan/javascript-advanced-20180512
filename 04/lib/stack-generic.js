"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.push = function (el) {
        this.elements.unshift(el);
    };
    Stack.prototype.pop = function () {
        return this.elements.shift();
    };
    return Stack;
}());
exports.Stack = Stack;
