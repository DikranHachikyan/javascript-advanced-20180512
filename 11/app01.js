//const exec = require('child_process').exec;
const {exec} = require('child_process');

const child = exec('cat *.js output| wc',{
    cwd:'../10/'
},(error,stdout,stderr)=>{
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    if(error){
        console.log(`error:${error}`);
    }
});

console.log(`Main PID: ${process.pid}`);
console.log(`Child PID: ${child.pid}`);