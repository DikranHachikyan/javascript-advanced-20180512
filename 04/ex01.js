"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var service_1 = require("./service");
var person2_1 = require("./lib/person2");
var auth = function (obj, user, pass) {
    return obj.login(user, pass);
};
var p = new person_1.Person('John', 'Doe');
if (p.login('john', '1234')) {
    p.show();
}
else {
    console.log('Invalid username or password');
}
p.logout();
var s = new service_1.Service();
if (s.login('mongo', '12345')) {
    console.log('successful login');
}
s.logout();
//полиморфизъм
//обектът е от тип Service
if (auth(s, 'mongo', '12345')) {
    console.log('auth service');
}
//обектът е от тип Person
if (auth(p, 'john', '1234')) {
    console.log('auth person');
}
var users = [
    new person_1.Person('Anna', 'Smith'),
    new service_1.Service()
];
users[0].logout();
console.log("John:" + p.loggedIn);
var e = new person2_1.Person('Maria', 'Anders');
e.show();
