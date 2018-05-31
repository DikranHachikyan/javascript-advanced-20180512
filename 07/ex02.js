'use strict'

const values = [1,2,3,4,5];

function main(){
    
    let sm = values.filter((v)=> (v % 2) === 0)
                   .map((v)=> v * 2)
                   .reduce((acc,cur)=>acc + cur);
    console.log('result='+ sm);
}

main();