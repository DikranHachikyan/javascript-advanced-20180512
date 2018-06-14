const {spawn} = require('child_process');

const timer = spawn('node',['./children/timer.js'],{
    stdio: 'ignore', //'inherit',
    detached:true //background process
});

timer.unref();//позволява осн.процесс да приключи независимо от дъщерния