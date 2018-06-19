const {EventEmitter} = require('events');
const {inherits} = require('util');

function UploadManager(){
    let _this = this;
    this.upload = (url)=>{
        let progress = 0,
            fileSize = 0;

        console.log(`Upload Started ${url}`);

        let progressInterval = setInterval(()=>{
            progress += 20;
            fileSize += 50;
            _this.emit('progress', {'progress': progress, 'size':fileSize});

            if( progress === 100 ){
                clearInterval(progressInterval);
                _this.emit('finished', fileSize);
            }
        }, 1000);


    }
}

inherits(UploadManager, EventEmitter);

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