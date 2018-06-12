process.on('SIGINT', ()=>{
    process.stdout.write('ctrl+c not permitted');
});

process.on('SIGHUP', ()=>{
    process.stdout.write('reload config file');
});

/*process.on('SIGKILL', ()=>{
    process.stdout.write('sigkill');
});*/

setInterval(()=>{
    console.log('Runninig...');
},2000);

console.log(`PID:${process.pid}`);
