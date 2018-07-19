import {addNewContact,
        getContacts,
        updateContact,
        deleteContact,
        getContactById } from '../controllers';

export const routes = (app)=>{
    //GET: четене на данни
    app.route('/contact')
       .get((req,res,next)=>{
            console.log(`Get all contacts ${req.url} ${req.method}`);
            next();
       }, getContacts)
    //POST: добавяне на нови записи
       .post((req,res,next)=>{
            console.log(`Add New Contact: ${JSON.stringify(req.body)}`)
            next();
       }, 
       addNewContact);
    
    //PUT: промяна на съществуващи записи
    app.route('/contact/:contactId')
       .get((req,res,next)=>{
        console.log(`GET contact ID:${req.params.contactId}`)
        next();
       },
       getContactById)
       .put((req,res,next)=>{
            console.log(`Update Contact Id:${req.params.contactId}`);
            next();
       }, updateContact)
    //DELETE: изтриване на записи
       .delete((req,res,next)=>{
            console.log(`Delete Contact Id:${req.params.contactId}`);
            next();
       },deleteContact);
};