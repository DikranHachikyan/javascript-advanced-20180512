import  TodoCollection from './todo-collection';
import  TodoView from './todo-view';

const todosListView = ($el, ...titleArr:string[])=>{
    let todoCollection = TodoCollection(...titleArr);

    const render  = ():void => {
        const $list = todoCollection.get().map((todo)=>{
            return TodoView(todo).render();
        }).join('');
        $el.innerHTML = `<ul>${$list}</ul>`;
        attachEvents();
    };

    const attachEvents = ():void =>{
        const $todos = $el.querySelectorAll('.list-group-item');

        $todos.forEach(($todo)=>{
            const id = parseInt($todo.getAttribute('data-id'));
            const $checkbox = $todo.querySelector('.toggleCompleted');
            const $removeBtn = $todo.querySelector('.remove');

            $checkbox.addEventListener('click', ()=>{
                console.log('toggle:' + id);
                action('toggleCompleted',id);
            });

            $removeBtn.addEventListener('click', ()=>{
                console.log('remove:' + id);
                action('remove',id);
            });
        });
    };

    const action = (type:string, ...params:any[]):void =>{
        todoCollection[type](...params);
        render();
    };

    return {
        render,
        action
    };
};

export default todosListView;