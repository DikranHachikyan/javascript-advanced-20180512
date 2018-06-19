const {UploadManager, show} = require('upload-manager');

const uploader = new UploadManager();
uploader.upload('movie.mp4');

uploader.on('progress', (data)=>{
    process.stdout.clearScreenDown();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress:${data.progress} size:${data.size}`);
});


uploader.on('finished', (data)=>{
    process.stdout.write(`\nUploaded ${data} Bytes\n`);
});

show('Hello Node');