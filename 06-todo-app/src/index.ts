import TodoListView from './todos-list';
namespace app {

    export const init = ():void => {
        const $todos = document.getElementById('todos');
        const $input = document.getElementById('todo-input');
        const $addBtn = document.getElementById('add-todo');

        const todoListView = TodoListView($todos,'write 500 words', 'read docs');
        todoListView.render();

        const validateInput = (value):boolean =>{
            return typeof value == 'string' && value.trim().length > 0;
        }
        $addBtn.addEventListener('click',()=>{
            if(validateInput($input['value'])){
                todoListView.action('add', $input['value']);
                $input['value']='';
            }
        });

        $input.addEventListener('keypress', (event)=>{
            //console.log('Event Object:', event);
            if(event['keyCode'] === 13 && validateInput($input['value'])){
                todoListView.action('add', $input['value']);
                $input['value']='';
            }

        });
        console.log('init app');
    }
}

app.init();

