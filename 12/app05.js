const fs = require('fs');
const filename = 'data-files/lorem.txt';


fs.open( filename, 'r', (err,fd)=>{
    console.log(`File Descriptor:${fd}`);
    fs.stat(filename, (err,stats)=>{
        console.log('stats:%j',stats);
        let buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length,null ,(err,bytesRead, buffer)=>{
            let data = buffer.toString('UTF-8');
            console.log(`Read ${bytesRead} Bytes`);
            console.log(data);
        });
    })

});

console.log('Read File Content');