'use strict'

//1. декларация на клас
function User(){
    //1. данни на класа
    //private
    let firstName = 'John';
    let lastName;
    //public
    this.age = 30;

    console.log('create object User');

    //метод (public)
    this.show = function(){
        console.log(`User age:${this.age}`);
        foo();
    };
    //метод (private)
    function foo(){
        console.log('private method');
    }

}

//2. създаване на обект

let john = new User();
console.log('John age:', john.age); 
console.log('John Name:', john.firstName); 
john.show();
//john.foo();

john.isLogged = true;

let anna = new User();

console.log('is anna logged in:', anna.isLogged);
