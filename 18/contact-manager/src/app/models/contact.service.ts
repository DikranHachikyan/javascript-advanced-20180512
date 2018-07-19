import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from './contact';

import { Observable } from 'rxjs/Observable';

const URL:string = 'http://localhost:3000';

@Injectable()
export class ContactService {

  constructor(private http:HttpClient) { }

   getContactList():Observable<Contact[]>{
     return this.http.get<Contact[]>(`${URL}/contact`);
   }

   getContactById(id:string):Observable<Contact>{
    return this.http.get<Contact>(`${URL}/contact/${id}`);
   }

   deleteContact(id:string):Observable<any>{
    return this.http.delete(`${URL}/contact/${id}`);
   }

   saveContact(contact:Contact):Observable<Contact>{
    //Update
    if( contact._id ){
        return this.http.put<Contact>(`${URL}/contact/${contact._id}`, contact);
    }
    else{
    //Add New
        contact._id = contact.created = undefined;
        return this.http.post<Contact>(`${URL}/contact`, contact);
    }
   }//save contact

}
