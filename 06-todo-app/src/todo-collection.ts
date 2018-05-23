import TodoModel from './todo-model';

const todoCollection = (...titleArr:string[]):object=>{
    let collection:object[] = titleArr.map( (title,index)=>{
        return TodoModel( index + 1, title);
    });

    const get = ():object[]=>{
        return collection;
    };

    return {
        get,
    };
};

export default todoCollection;