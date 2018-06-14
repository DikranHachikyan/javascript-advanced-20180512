const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();



server.listen(3000);

server.on('request', (req,res)=>{
    if(req.url === '/calc'){
        const calc = fork('./children/sum.js');
        calc.send('start');
        calc.on('message', (data)=>{
            res.end(`sum is ${data.result}`);
            
        });
        return;
    }
    res.end('Ok!');
});