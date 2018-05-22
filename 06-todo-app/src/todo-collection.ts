import TodoModel from './todo-model';

//const todos = todoCollection('T1','T2','T3')
//const todos = todoCollection('T1','T2','T3','T4')
const todoCollection = (...titleArr:string[])=>{
    let collection:object[] = titleArr.map( (title, index)=>{
        return TodoModel(index+1, title);
    });

    const get = ():object[]=>{
        return collection;
    };

    return {
        get
    };
};

export default todoCollection;