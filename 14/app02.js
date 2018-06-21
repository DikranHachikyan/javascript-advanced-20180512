const fs = require('fs');
const path = require('path');

const readDir = (dir, level='')=>{
    let files = fs.readdirSync(dir);

    files.forEach( (fileName)=>{
        let file = path.join(dir, fileName);
        let stats = fs.statSync(file);

        if(stats.isFile()){
            console.log(`${level}${fileName} perms:${(stats.mode & 0777).toString(8)} perms:${stats.mode}`);
        }
        else if(stats.isDirectory()){
            console.log(`dir:${file}`);
            readDir(file, level+'-'); //рекурсивно изивкване на функцията
        }
        //console.log(file);
    });//for each filename
};

readDir('./');