'use strict';

const User = {
    set firstName(name){
        console.log('first name setter');
        this.fname = name;
    }
    , get firstName(){
        console.log('first name getter');
        return this.fname;
    }
    , show : function(){
        console.log(`${this.firstName}`);
    }

};

User.firstName = 'John';

User.show();

console.log(`first name: ${User.firstName}`);