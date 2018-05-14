'use strict';

//1. декларация на клас

function User(fname='',lname='',mail=''){
    //Данни на класа
    //private
    let firstName = upper(fname);
    let lastName = upper(lname);
    //public
    this.mail = mail;
    //Методи
    //public
    this.show = function(){
        console.log(`${firstName} ${lastName} (${this.mail})`);
    }
    //private
    function upper(text){
        return text.toUpperCase();
    }
    console.log('Constructor User');
}

//2. създаване на обект

let u = new User('John', 'Doe','j@no.com');

u.isAdmin = true;
u.print = function(){
    console.log('method print');
}
u.print();

let u2 = new User('Anna', 'Smith','a@no.com');

console.log(`is admin anna: ${u2.isAdmin}`);

u2.print();

