"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_generic_1 = require("./lib/stack-generic");
var product_1 = require("./product");
var person_1 = require("./person");
var service_1 = require("./service");
var names = new stack_generic_1.Stack();
names.push('Anna');
names.push('John');
names.push('Maria');
console.log("" + names.pop());
console.log("" + names.pop());
console.log("" + names.pop());
var products = new stack_generic_1.Stack();
products.push(new product_1.Product('IPhone', 500));
products.push(new product_1.Product('Samsung', 400));
products.push(new product_1.Product('Nokia', 300));
console.log("" + products.pop().name);
console.log("" + products.pop().name);
console.log("" + products.pop().name);
var sp = new stack_generic_1.Stack();
sp.push(new person_1.Person('Anna', 'Smith'));
sp.push(new service_1.Service());
var obj = sp.pop();
if (obj.login('mongo', '12345')) {
    console.log('succesful login');
}
