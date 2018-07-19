import { Component, OnInit } from '@angular/core';
import { ContactService} from '../models/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[];
  selectedContact:Contact;
  title:string = 'Contact Manager';
    
  constructor(private dataSource:ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts():void{
    this.dataSource.getContactList()
                   .subscribe((list)=>this.contacts = list,
                              (err)=>console.log(err),
                              ()=>console.log('contact list loaded'));
  }

  onSelectContact(id:string):void{
    this.dataSource.getContactById(id)
                      .subscribe((contact)=>{
                                  console.log(contact);
                                  this.selectedContact = contact;
                                  },
                                 (err)=>console.log(err),
                                 ()=>console.log('contact loaded'));
  }

  deleteContact(event, id:string):void{
    event.stopPropagation();
    this.dataSource.deleteContact(id)
                   .subscribe( (status)=>{
                      console.log(status)
                      this.getContacts();
                   },
                   (err)=>console.log(err),
                   ()=>console.log('contact deleted'));
  }
  fromChildComponent():void{
    console.log(`From Child`);
  }
}
