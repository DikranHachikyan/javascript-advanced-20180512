const {fork} = require('child_process');
const children = [];

console.log(`Main PID:${process.pid}`);

//const child = fork('');

console.log(`argv`, process.argv);
