import { Component, OnInit } from '@angular/core';
import { StaticDatasourceService} from '../models/static-datasource.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[];
  selectedContact:Contact;
    
  constructor(private dataSource:StaticDatasourceService) { }

  ngOnInit() {
    this.dataSource.getContactList()
                   .subscribe((list)=>this.contacts = list,
                              (err)=>console.log(err),
                              ()=>console.log('contact list loaded'));
  }

  onSelectContact(id:number):void{
    this.dataSource.getContactById(id)
                      .subscribe((contact)=>{
                                  console.log(contact);
                                  this.selectedContact = contact;
                                  },
                                 (err)=>console.log(err),
                                 ()=>console.log('contact loaded'));
  }

  fromChildComponent():void{
    console.log(`From Child`);
  }
}
