import {expect} from 'chai';
import TodoModel from '../src/todo-model';
import TodoCollection from '../src/todo-collection';

// describe('simple test', ()=>{
//     it('price should equal to 12', ()=>{
//         let price=12;

//         expect(price).to.equal(12);
//     });
//     let product = {name:'IPhone'};
//     it('should be an object', ()=>{
//         expect(product).to.be.an('object');
//     });
//     it('should have property name of type string', ()=>{
//         expect(product).to.have.property('name');
//         expect(product['name']).to.be.a('string');
//     });

// });

describe('TodoModel Object', ()=>{
        const newTodo = TodoModel(1,'read docs');

    it('should return todo item with id, title, completed', ()=>{
        expect(newTodo).to.have.property('id');
        expect(newTodo).to.have.property('title');
        expect(newTodo).to.have.property('completed');
    });

    it('should return an object {1,"read docs",false}', ()=>{
        expect(newTodo).to.eql({
            id:1,
            title:'read docs',
            completed:false
        });
    });
});

describe('Todo Collection', ()=>{
    const newTodoCollection = TodoCollection('read','write','learn');

    it('should be an object',()=>{
        expect(newTodoCollection).to.be.an('object');
    });

    it('should return an array of objects',()=>{
        expect(newTodoCollection['get']()).to.be.an('array');
    });

    it('should return an array of 3 items',()=>{
        expect(newTodoCollection['get']().length).to.equal(3);
    });


});