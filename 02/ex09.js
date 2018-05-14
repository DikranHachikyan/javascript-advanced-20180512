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

    this.setFirstName = function(name){
        firstName = name;
    }

    this.setLastName = function(name){
        lastName = name;
    }

    this.getFirstName = function(){
        return firstName;
    }

    this.getLastName = function(){
        return lastName;
    }


    //private
    function upper(text){
        return text.toUpperCase();
    }
    console.log('Constructor User');
}


User.prototype.print = function(){
        this.show();
};

User.prototype.setNames = function(fname,lname){
    this.setFirstName(fname);
    this.setLastName(lname);
}


//Function Overriding
//името + броя на параметрите трябва да се запази
User.prototype.toString = function(){
    return `${this.getLastName()}, ${this.getFirstName()}`
}
//2. създаване на обект

let u = new User('John', 'Doe','j@no.com');

let u2 = new User('Anna', 'Smith','a@no.com');

u.print();
u2.print();

console.log('user john as a string:' + u);
console.log(u.toString());