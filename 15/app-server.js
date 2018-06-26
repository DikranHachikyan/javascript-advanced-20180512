const {createServer} = require('net');

const sockets = [];

const server = createServer();

server.on('connection', (socket)=>{
    process
        .stdout
        .write(`Connection from ${socket.remoteAddress}:${socket.remotePort}\n`);

   sockets.push(socket);
   //1. в началото на връзката
   socket.once('data', (buffer)=>{
        socket.username = buffer.toString('utf8');//.substr(0,buffer.length - 1);     
        //console.log();
        sendMessage(socket, `${socket.username} joined the chat`)
        //2.останалите (след 1-то) съобщения
        socket.on('data', (buffer)=>{
            let data = buffer.toString('utf8');
            let obj = JSON.parse(data);
            if( obj.message === '[who]'){
                listUsers(socket);
                return;
            }
            sendMessage(socket, `${socket.username} says:${obj.message} (${obj.stamp})`);
        }); //socket on data
   });//socket once

   //3. изход от чата
   socket.on('end', ()=>{
        sockets.splice(sockets.indexOf(socket), 1);
        sendMessage(socket, `${socket.username} left the chat`);
   });
});

const options = {
    host:'127.0.0.1'
    , port: 3000
};

server.listen(options, ()=>{
    process.stdout.write(`Listen on ${options.host}:${options.port}\n`);
});


const sendMessage = (sender, message)=>{
    console.log(`${message}`);
    sockets.forEach((socket)=>{
        if(socket === sender) return;
        socket.write(message);
    });//for each socket 
};

const listUsers = (sender)=>{
    let userList = '';
    sockets.forEach( (socket)=>{
        if(socket == sender) return;
        userList += `${socket.username}\n`; 
    })
    sender.write(userList);
};