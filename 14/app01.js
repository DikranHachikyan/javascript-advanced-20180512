const fs = require('fs');
const fileName = './data_files/data.json';

fs.readFile(fileName, 'utf8', (err,content)=>{
    let json = JSON.parse(content);
    json.forEach((el)=>{
        //console.log('%j',el)
        console.log(`Category:${el.title}`);
    });
});