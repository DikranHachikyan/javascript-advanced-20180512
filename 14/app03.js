const fs = require('fs');
const fileName = './data_files/lorem.txt';

const options = {
      encoding: 'utf8'
    , highWaterMark:200
};

const readStream = fs.createReadStream( fileName , options);

readStream.on('data', (chunk)=>{
    process
        .stdout
        .write(`\n --chunk: ${chunk.length} Bytes`);
    readStream.pause();
    setTimeout(()=>{
        readStream.resume();
    },1000);
});

readStream.on('end',()=>{
    process
        .stdout
        .write(`\nReading Finished:${readStream.bytesRead}\n`);
});