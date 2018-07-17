import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import {Contact} from './contact';

const contacts:Contact[] = [
 {
    id:11,
    firstName: 'John',
    lastName:'Doe',
    email:'john@no.com',
    phone:'111-22-33',
    created: Date.now()
  },
  {
    id:12,
    firstName: 'Anna',
    lastName:'Smith',
    email:'anna@no.com',
    phone:'333-22-33',
    created: Date.now()
  },
 {
    id:13,
    firstName: 'Peter',
    lastName:'Thomas',
    email:'peter@no.com',
    phone:'444-22-33',
    created: Date.now()
  },
 {
    id:14,
    firstName: 'Maria',
    lastName:'Anders',
    email:'maria@no.com',
    phone:'555-44-33',
    created: Date.now()
  }
];

@Injectable()
export class StaticDatasourceService {

  constructor() { }

  getContactList():Observable<Contact[]>{
    return Observable.of(contacts);
  }

  getContactById(id:number):Observable<Contact>{
    let contact:Contact = contacts.filter((contact)=>contact.id === id).pop();
    //return Observable.of(contact);
    return Observable.from([contact]);
  }

  deleteContact(id:number):void{
    //console.log(`delete id:${id}`);
    contacts.splice(contacts.findIndex((contact)=>contact.id === id), 1);
    //console.log(contacts);
  }

  saveContact(contact:Contact):void{
    contacts.forEach( (cont)=>{
      if(cont.id === contact.id){
        cont = contact;
      }
    });
    //console.log(contacts);
  }
}
