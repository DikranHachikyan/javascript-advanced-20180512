let counter = 0;

let interval = setInterval(()=>{
    process.send({
        counter:counter++
    });
    if( counter > 20){
        clearInterval(interval);
        process.send('quit');
    }
},100);

process.on('message',(msg)=>{
    console.log(`from parent:${msg.text}`);
});