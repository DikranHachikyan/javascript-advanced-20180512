"use strict"

//глобална променлива
let message = "Hello Nodejs"


function showMessage(){
    let a = 10; //локална променлива

    if( true ){
        let b = 1; //локална променлива
        console.log("1. b=", b);
    }
    console.log(message);
    console.log("a=",a);
    console.log("2. b=",b);
    
}

showMessage();