// import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';

// import {Contact} from './contact';

// const contacts:Contact[] = [
//  new Contact(
//     11,
//     'John',
//     'Doe',
//     'john@no.com',
//     '111-22-33',
//      Date.now()
//   ),
//   new Contact(
//     12,
//     'Anna',
//     'Smith',
//     'anna@no.com',
//     '333-22-33',
//      Date.now()
//   ),
//  new Contact(
//     13,
//     'Peter',
//     'Thomas',
//     'peter@no.com',
//     '444-22-33',
//      Date.now()
//   ),
//  new Contact(
//     14,
//     'Maria',
//     'Anders',
//     'maria@no.com',
//     '555-44-33',
//      Date.now()
//   )
// ];

// @Injectable()
// export class StaticDatasourceService {

//   constructor() { }

//   getContactList():Observable<Contact[]>{
//     return Observable.of(contacts);
//   }

//   getContactById(id:number):Observable<Contact>{
//     let contact:Contact = contacts.filter((contact)=>contact.id === id).pop();
//     //return Observable.of(contact);
//     return Observable.from([contact]);
//   }

//   deleteContact(id:number):void{
//     //console.log(`delete id:${id}`);
//     contacts.splice(contacts.findIndex((contact)=>contact.id === id), 1);
//     //console.log(contacts);
//   }

//   saveContact(contact:Contact):void{
//     if( contact.id){
//       contacts.forEach( (cont)=>{
//         if(cont.id === contact.id){
//           cont = contact;
//         }
//       });
//     }
//     else{
//       contact.id = contacts[contacts.length - 1].id + 1;
//       contact.created = Date.now();
//       contacts.push(contact);  
//       console.log(contacts);
//     }
//   }
// }
