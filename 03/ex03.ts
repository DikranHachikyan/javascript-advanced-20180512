
function sum(a:number, b:number):number{
    let res:number = a + b;
    return res;
}

function showMessage(message:string):void{
    console.log(message);
}

function showError(errorMessage:string):never{
    throw Error(errorMessage);
}

let x:number = 10,
    y:number = 5,
    suma:number;

suma = sum(x,y);

console.log(`suma=${suma}`);


showMessage('Hello TypeScript');

showError('Error Message');

showMessage('Hello TypeScript');
