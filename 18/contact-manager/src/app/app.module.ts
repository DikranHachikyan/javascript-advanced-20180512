import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { StaticDatasourceService} from './models/static-datasource.service'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StaticDatasourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
