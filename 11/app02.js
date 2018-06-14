const {spawn} = require('child_process');

const ls = spawn('ls', ['-ls','../10/']);
const wc = spawn('wc');

ls.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data)=>{
    console.log(data.toString());
});

wc.stderr.on('data', (data)=>{
    console.log(`stderr:${data.toString()}\n`);
});

