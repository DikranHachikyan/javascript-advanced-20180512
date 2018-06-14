let progress = process.argv[2],
    time     = process.argv[3],
    sym      = progress;


let interval = setInterval(()=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    progress += sym;
    process.stdout.write(`Child ${process.pid} ${progress}`);
}, time);