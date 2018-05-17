import {Person, Student} from './person';
import {Service} from './service';
import {Authenticate} from './authenticate';
import {Person as Employee} from './lib/person2';

const auth = (obj:Authenticate, user:string, pass:string):boolean =>{
    return obj.login(user,pass);
}

const p:Person = new  Person('John', 'Doe');

if( p.login('john','1234') ){
    p.show(); 
}
else{
    console.log('Invalid username or password');
}

p.logout();


const s:Service = new Service();

if( s.login('mongo','12345')){
    console.log('successful login');
}

s.logout();
//полиморфизъм
//обектът е от тип Service
if(auth(s, 'mongo','12345')){
    console.log('auth service');
}

//обектът е от тип Person
if(auth(p, 'john', '1234')){
    console.log('auth person');
}

const users:Authenticate[] = [
    new Person('Anna', 'Smith'),
    new Service()
];

users[0].logout();

console.log(`John:${p.loggedIn}`);   


const e:Employee = new Employee('Maria','Anders');
e.show();