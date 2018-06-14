//const exec = require('child_process').exec;
const {exec} = require('child_process');

const tail = exec('tail -f output',{cwd:'./'});

tail.stdout.on('data', (data)=>{
    console.log(data);
});

console.log(`Main PID: ${process.pid}`);
console.log(`Child PID: ${tail.pid}`);