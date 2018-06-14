let counter = 0;

console.log(`PID:${process.pid}`);

let interval = setInterval(()=>{
    ++counter;
    if( counter > 10){
        clearInterval(interval);
        process.exit(0);
    }
    console.log(`counter:${counter}`);
},3000);