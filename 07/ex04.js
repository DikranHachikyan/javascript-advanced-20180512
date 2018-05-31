'use strict';

function sendRequest(url){
    return new Promise((resolve,reject)=>{
        console.log(`send request to:${url}`);
        setTimeout(()=>{
            let categories = [  {id:1, name:'Mobile Phones', slug:'mobile-phones'}
                             , {id:2, name:'Digital Cameras', slug:'digital-cameras'}
                             ];
            if(url.indexOf('categories') !== -1){
                resolve(categories);
            }
            else if( url.indexOf('mobile-phones') !== -1){
                resolve({phones:['Samsung','Nokia']});
            }
            else if( url.indexOf('digital-cameras') !== -1){
                resolve({cameras:['LG','Cannon', 'Sony']});
            }
            else{
                reject('Invalid url');
            }

        }, 1000);

    });
}

console.log('before send request');
sendRequest('/categories/')
.then((data)=>{
    console.log('Data 1:', data);
    let proms = data.map((d)=>sendRequest(`/${d.slug}/`));
    return Promise.all(proms);
})
.then((data)=>{
    console.log('Data 2:', data);
})
.catch(err=>console.log(`error:${err}`));

console.log('after send request');