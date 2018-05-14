'use strict'

let x = 10; //10 литерал

function print(user){
    if( user.firstName === undefined ||  user.lastName === undefined){
        throw Error('print require user object');
    }
    console.log(`${user.firstName} ${user.lastName}`);
}
//1. декларация на клас

//2. създаване на обект
const john = {
    firstName:'John',
    lastName:'Doe',
    show: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

john.show();

print(john);
//print({});

let j = john;

j.firstName = 'Anna';
j.show();
john.show();

