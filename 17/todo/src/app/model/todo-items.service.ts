import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import { of } from 'rxjs/observable/of';

import {TodoItem} from './todo-item';

const todoItems:TodoItem[] = [
    {"id":1,"title":"Gratitude list – 5 things you are grateful for", "completed":false},
    {"id":2,"title":"Start the day with your WHY.", "completed":false},
    {"id":3,"title":"Fresh green juice", "completed":false},
    {"id":4,"title":"Write 500 words", "completed":true},
    {"id":5,"title":"Review the day and check in with the next few days", "completed":true},
    {"id":6,"title":"Clear desk ready for a fresh day tomorrow!", "completed":false}
];

const removedTodos:TodoItem[] =[
];

@Injectable()
export class TodoItemsService {

  constructor() { }

  getTodoItems():Observable<TodoItem[]>{
    return Observable.of(todoItems);
    //return of(todoItems);
    //return todoItems;
  }

  toggleCompleted(id:number):void{
    todoItems.map((item)=>{
        if(item.id === id){
          item.completed = !item.completed;
        }
    });
    console.log(todoItems);
  }

  removeItem(id:number):void{
    let idx = todoItems.findIndex((item)=>item.id === id);
    todoItems.splice(idx,1);
  }

  addNewTodoItem(item:TodoItem):void{
    todoItems.push(item);
  }
}
