import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoItemsService } from './model/todo-items.service';
import { RemovedItemsComponent } from './removed-items/removed-items.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoRoutingModule } from './todo-routing/todo-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RemovedItemsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    TodoRoutingModule
  ],
  providers: [TodoItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
