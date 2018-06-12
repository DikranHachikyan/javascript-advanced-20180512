console.log('start');

setTimeout( ()=>console.log('timeout'),1);
setTimeout(()=>{
    process.nextTick(()=>{
        console.log('next tick');
    });
}, 100);

console.log('end');
