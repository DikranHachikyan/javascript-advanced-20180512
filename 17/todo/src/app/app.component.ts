import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  //template:`<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todo Application';

  constructor(){}

  ngOnInit(){
    
  }
}
