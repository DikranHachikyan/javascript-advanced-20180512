const {fork} = require('child_process');

const forked = fork('./children/child.js');

forked.on('message', (msg)=>{
    if( typeof msg === 'string' && msg === 'quit'){
        process.exit(0);
    }
    console.log(`from child:${msg.counter}`);
});

forked.send({text:'hello'});