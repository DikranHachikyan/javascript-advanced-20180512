import {Stack} from './lib/stack-generic';
import {Product} from './product';
import {Authenticate} from './authenticate';
import {Person} from './person';
import {Service} from './service';

const names = new Stack<string>();

names.push('Anna');
names.push('John');
names.push('Maria');

console.log(`${names.pop()}`);
console.log(`${names.pop()}`);
console.log(`${names.pop()}`);

const products = new  Stack<Product>();

products.push( new Product('IPhone', 500));
products.push( new Product('Samsung', 400));
products.push( new Product('Nokia', 300));


console.log(`${products.pop().name}`);
console.log(`${products.pop().name}`);
console.log(`${products.pop().name}`);

const sp = new Stack<Authenticate>();

sp.push( new Person('Anna', 'Smith'));
sp.push( new Service());

const obj:Authenticate = sp.pop();

if(obj.login('mongo','12345')){
    console.log('succesful login');
}