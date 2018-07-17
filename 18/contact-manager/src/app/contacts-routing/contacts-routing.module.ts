import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

const routes:Routes = [
    { path:'list', component:ContactListComponent},
    { path:'add-new', component:ContactDetailsComponent},
    { path:'**', redirectTo:'/list'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
