import { Component, 
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Contact } from '../models/contact';

import { ContactService } from '../models/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input('selected-contact') contact:Contact;
  @Output('contactUpdated') contactUpdated:EventEmitter<any> = new EventEmitter(); 
  addNewMode:boolean = false; 
  constructor(private dataSource:ContactService,
              private router:Router,
              private location:Location){ 
    this.router.events
               .subscribe((event)=>{
                  //console.log(event)
                  if( event instanceof NavigationEnd && event.url === '/add-new'){
                    this.contact = new Contact();
                    this.addNewMode =  true;
                  }
                  else{
                    this.addNewMode = false;
                  }
                });
  
  }//constructor

  ngOnInit() {
  }

  saveContact():void{
      this.dataSource.saveContact(this.contact)
          .subscribe((contact)=>{
                        this.contact=contact
                        this.contactUpdated.emit();
                      },
                     (err)=>console.log(err),
                     ()=>console.log(`add/update completed`));
      
  }

  goBack():void{
    this.location.back();
  }
}
