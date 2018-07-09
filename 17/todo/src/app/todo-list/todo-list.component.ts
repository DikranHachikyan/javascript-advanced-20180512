import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import {TodoItemsService} from '../model/todo-items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
items:TodoItem[];

  constructor(private todoItemsService:TodoItemsService){}

  ngOnInit():void{
    console.log('init component');
    this.todoItemsService.getTodoItems()
                         .subscribe( (todoItems)=>this.items = todoItems,
                                     (error)=>console.log(error),
                                     ()=>console.log('todo items loaded'));
  }

  toggleCompleted(id:number):void{
    this.todoItemsService.toggleCompleted(id);
    //console.log(this.items);
  }

  removeItem(id:number):void{
    this.todoItemsService.removeItem(id);
  }

  addNewTodoItem(el:any):void{
    let newItem:TodoItem = {
        id: this.items.length + 1,
        title:el.value,
        completed:false
    };
    this.todoItemsService.addNewTodoItem(newItem);
    el.value = '';
    console.log(this.items);
  }

}
