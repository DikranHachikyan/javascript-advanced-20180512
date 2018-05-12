'use strict'

let values = [1,5,7];

function sum(a,b,c){
    return a + b + c;
}

console.log('suma=', sum(values[0], values[1], values[2]) );
console.log('suma=', sum(...values) );

let nums = [2,3, ...values, 10,20];

console.log('nums=',nums);