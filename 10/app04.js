console.log('start');

setTimeout( ()=>console.log('timeout'),1);
process.nextTick(()=>{
    console.log('next tick');
});

console.log('end');

process.on('beforeExit', ()=>{
    console.log(`before exit`);
});
