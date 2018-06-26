const {Socket} = require('net');
const {createInterface} = require('readline');

const client = Socket();
client.setEncoding('utf8');

const readLine = createInterface(process.stdin,process.stdout);

//Клиентът изпраща съобщения
readLine.question("User Name:", (username)=>{

    client.connect(3000, '127.0.0.1', ()=>{
        client.write(username);
        readLine.setPrompt(`<<`);
        readLine.prompt();

        readLine.on('line', (line)=>{
            if( line === '[quit]'){
                client.end();
                readLine.close();
                return;
            }
            let msg = JSON.stringify({message:line, stamp: new Date()});
            client.write(msg);
            readLine.prompt();
        });
    });
});//question

//Клиентът получава съобщения

client.on('data', (buffer)=>{
    process
        .stdout
        .write(`\n>>${buffer.toString('utf8')}`);
}); //on data

client.on('close', ()=>{
    process
        .stdout
        .write(`\nConnection closed!`);
});