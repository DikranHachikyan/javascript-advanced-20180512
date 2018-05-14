'use strict';

//1. декларация на клас

//2. създаване на обект
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
    return {
        print: show,
        setNames: register,
        mail:'john@no.com', 
        isRegistred: function(){
            //show();
            return firstName !== undefined && lastName !== undefined;
        }

    };
})();

User.setNames('John', 'Doe');
if( User.isRegistred()){
    User.print();
}

//not a constructor
//let u = new User();
let u = User;

u.setNames('Anna', 'Smith');

User.print();