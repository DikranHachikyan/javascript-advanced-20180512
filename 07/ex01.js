'use strict'

const values = [1,2,3,4,5];

//Помислете как да стане с гъвкав критерий
function filter(array){
    if( !Array.isArray(array)) throw new Error('Not an array');
    let arr = [];
    for( const v of array){
        if( (v % 2) === 0 ){
            arr.push(v);
        }
    }
    return arr;
}

function sum(array){
    if( !Array.isArray(array)) throw new Error('Not an array');
    let s = 0;
    for( const v of array){
        s += v;
    }
    return s;
}

function main(){
    let vals = filter(values);
    let sm = sum(vals);
    console.log('result='+ sm);
}

main();