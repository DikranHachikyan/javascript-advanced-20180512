const todoModel = (id:number, title:string, completed:boolean=false):object=>{
    return {
        id, 
        title, 
        completed
    };
};

export default todoModel;