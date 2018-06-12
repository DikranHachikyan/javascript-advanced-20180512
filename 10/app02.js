
const values = [1,2,3,4,5,6,7,8,9];



console.time('forEach');
values.forEach( (value)=>console.log(value));
console.timeEnd('forEach');

console.time('for');
for(let i=0; i < values.length; i++){
    console.log(values[i]);
}
console.timeEnd('for');

console.time('for of');
for( const v of values){
    console.log(v);
}
console.timeEnd('for of');