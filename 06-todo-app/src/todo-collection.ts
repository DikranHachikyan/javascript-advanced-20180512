import TodoModel from './todo-model';

const todoCollection = (...titleArr:string[])=>{
    let collection:object[] = titleArr.map( (title,index)=>{
        return TodoModel( index + 1, title);
    });

    const get = ():object[]=>{
        return collection;
    };

    const add = (title:string):void =>{
        const id = collection.length;
        collection = [...collection, TodoModel(id, title)]; 
    };

    const remove = (id:number):void=>{
        collection = collection.filter((todo)=>{
            return todo['id'] !== id;
        });
    }
    const getItemById = (id:number):object=>{
         let item; 
         collection.forEach((todo)=>{ 
             if(todo['id'] === id){
                item = todo;
             }
         });
         return item;
     };

    const toggleCompleted = (id:number):void=>{
        collection = collection.map((todo)=>{
            if( todo['id'] == id){
                return {
                    ...todo,
                    completed: !todo['completed']
                };
            }
            return todo;
        });
    };

    return {
        get,
        add,
        remove,
        getItemById,
        toggleCompleted
    };
};

export default todoCollection;