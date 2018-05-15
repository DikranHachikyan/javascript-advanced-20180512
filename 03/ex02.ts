
let message:string = 'Hello TypeScript',
    value:number = 10;

console.log(`Message:${message}`);
console.log(`value:${value}`);

//value = 'Hello';//Error
console.log(`value:${value}`);

let nums:number[] = [1,2,3,4,5];

enum UserType {
    USER,
    ADMIN=10,
    GUEST
};

let userType:UserType = UserType.ADMIN;

console.log(UserType);

let v:any  = 'hello';

v = 1;