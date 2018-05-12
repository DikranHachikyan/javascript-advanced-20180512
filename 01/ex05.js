'use strict'

function createUser(user, plan='developer'){
    if( user === undefined ){
        throw Error('Missing parameter');
    }
    console.log(`User: ${user} plan: ${plan}`);
}

let plan;

createUser('Anna', 'developer');
createUser('Anna');
createUser('Anna', plan);
createUser('Anna', '');
createUser('Anna', null);

//лош дизайн
//function foo(a, b=1, c){

//}

//foo(10,20);

//Ок!
function foo(a, c, b=1){

}

foo(10,20);
