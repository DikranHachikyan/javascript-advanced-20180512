import {expect} from 'chai';
import TodoModel from '../src/todo-model';
import TodoCollection from '../src/todo-collection'
// describe('simple test', ()=>{
//     it('expect price to equal 12', ()=>{
//         let price=12;
//         expect(price).to.equal(12);
//     });

//     it('expect object to have property title', ()=>{
//         let ob = {title:'Chai JS'};
//         expect(ob).to.have.property('title');
//     });
// });

describe('Todo Model Test', ()=>{
    it('expect to return todo model object', ()=>{
        const newTodo = TodoModel(1, 'Read Typescript API');
        expect(newTodo).to.eql({
            id:1,
            title:'Read Typescript API',
            completed: false
        });
    });
});

describe('Todo Collection Test', ()=>{
    it('expect to have 3 items', ()=>{
        const newTodoCollection = TodoCollection('write 500 words', 'read book', 'learn js');
        expect(newTodoCollection.get().length).to.equal(3);

    });
});