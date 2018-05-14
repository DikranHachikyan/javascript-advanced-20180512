'use strict';

function User(){

    this.show = function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

Object.defineProperty( User.prototype, 'firstName', {
    set: function(name){
        console.log('set first name');
        this.__fname = name;
        //fname = name;
    }
    , get: function(){
        console.log('get first name');
        return this.__fname;
        //return fname;
    }
});

Object.defineProperty( User.prototype, 'lastName', {
    set: function(name){
        console.log('set last name');
        this.__lname = name;
    }
    , get: function(){
        console.log('get last name');
        return this.__lname;
    }
});


let u = new User();

u.firstName = 'John';
u.lastName = 'Doe';

console.log(`${u.firstName} ${u.lastName}`);

console.log(u.__lname);