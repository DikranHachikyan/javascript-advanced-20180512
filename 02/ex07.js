'use strict';

//1. декларация на клас

const User = (function(){
    //private
    let firstName;
    let lastName;

    //private
    function show(){
        console.log(`${firstName} ${lastName}`);
    }

    function register(fname,lname){
        firstName = fname;
        lastName  = lname;
    }
    //public
    return function( fname, lname){
            register(fname,lname);

            this.print = show;
            this.setNames = register;

            this.isRegistered = function(){
                return firstName !== undefined && lastName !== undefined;
            }

            console.log('Ctor User');

    };
})();

//2. създаване на обект

let u1 = new User('Anna', 'Smith');
u1.print();

u1.setNames('John','Doe');

if( u1.isRegistered()){
    u1.print();
}

let u2 = new User('Maria', 'Anders');
u2.print();

if( u2.isRegistered()){
    u2.print();
}