import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {TodoListComponent} from '../todo-list/todo-list.component';
import {RemovedItemsComponent} from '../removed-items/removed-items.component';

const routes:Routes = [
    {path:'list', component: TodoListComponent},
    {path:'removed', component: RemovedItemsComponent },
    {path:'**', redirectTo:'/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
