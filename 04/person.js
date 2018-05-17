"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Person));
exports.Student = Student;
