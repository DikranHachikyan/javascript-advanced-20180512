const calculate = ()=>{
    let sum = 0;
    for(let i = 0; i < 1e9 ; i++){
        sum +=i;
    }
    return sum;
};

process.on('message', (msg)=>{
    if( typeof msg === 'string' && msg === 'start'){
        console.log(`calculation started`);
        const sum = calculate();
        process.send({result:sum});
    }
});