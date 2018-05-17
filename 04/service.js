"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service() {
        this.loggedIn = false;
    }
    Service.prototype.login = function (username, password) {
        if (username === 'mongo' && password === '12345') {
            this.loggedIn = true;
            return true;
        }
        return false;
    };
    Service.prototype.logout = function () {
        if (this.loggedIn) {
            console.log("service logout");
        }
    };
    return Service;
}());
exports.Service = Service;
