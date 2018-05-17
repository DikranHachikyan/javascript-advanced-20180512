"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //конструктор
    function Person(fname, lname) {
        this.loggedIn = false;
        this.firstName = fname;
        this.lastName = lname;
    }
    //методи
    //public show():void{
    Person.prototype.show = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    //
    Person.prototype.login = function (username, password) {
        if (username === 'john' && password === '1234') {
            this.loggedIn = true;
            return true;
        }
        return false;
    };
    Person.prototype.logout = function () {
        if (this.loggedIn) {
            console.log(this.firstName + " " + this.lastName + " logged out");
        }
    };
    return Person;
}());
exports.Person = Person;
