'use strict'

let values = [1,2,3,4,5,6,7,8];

let n = values.filter((value, index)=>{
    return (value % 2) === 0;
}); 

console.log('array:', n);