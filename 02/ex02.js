'use strict'

function Point(){
    console.log('Ctor Point');
}
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
let user = new User('Anna','Smith');
//undefined private var
//console.log('user:' + user.firstName);
user.mail = 'a@no.com,an@no.com';
console.log('user mail:' + user.mail);
user.show();
//Error (private method)
//console.log(user.upper('John'));

let user2 = new User('John','Doe','jd@no.com');

user2.show();

//User();

let p = new Point();
Point();