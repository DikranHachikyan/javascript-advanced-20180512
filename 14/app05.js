const net  = require('net');

const server = net.createServer((socket)=>{
    process
        .stdout
        .write(`Connection from ${socket.remoteAddress}:${socket.remotePort}\n`);

    socket.on('data', (buffer)=>{
        let buff = buffer.toString('utf8');
        process
            .stdout
            .write(`\nReceived ${buffer.length} Bytes ${buff}`);
            console.log(buffer);
        if( buff === 'quit\r\n'){
            socket.end();
            return;
        }
        socket.write(`received:${buff}`);
        socket.write(`>`);
    });

    socket.on('end', ()=>{
        process
            .stdout
            .write(`\n${socket.remoteAddress}:${socket.remotePort} disconnected!`);
    });

    socket.on('close', ()=>{
        process
            .stdout
            .write(`\nSocket closed!`);
    });
});//create server

const options = {
      host:'127.0.0.1'
    , port: 3000 //портове под 1024 изискват админ права 
};

server.listen(options, ()=>{
    process.stdout.write(`\nListen on ${options.host}:${options.port}\n`);
});