import mongoose from 'mongoose';
import {ContactSchema} from '../models';

const Contact = mongoose.model('Contact', ContactSchema);

//POST
export const addNewContact = (req,res)=>{
    const newContact = new Contact(req.body);

    // newContact.save((err,contact)=>{
    //     if(err){
    //        ...
    //        return;
    //     } 
    //     res.json(contact);
    // })
    newContact
        .save()
        .then((contact)=>res.json(contact))
        .catch((err)=>res.json(err));

};//add new contact 

//GET
export const getContacts = (req,res)=>{
    Contact
       .find({})
       .then((contacts)=>res.json(contacts))
       .catch((err)=>res.json(err));
}; //get contacts

export const getContactById = (req,res)=>{
  Contact
      .findOne({_id: req.params.contactId})
      .then( (contact)=>res.json(contact))
      .catch((err)=>res.json(err));
}; //get contact by id
//PUT
export const updateContact = (req,res)=>{
    Contact
        .findOneAndUpdate({_id:req.params.contactId},
                         req.body,
                         {upsert:true, 
                          returnNewDocument:false})
       .then((contact)=>res.json(contact))
       .catch((err)=>res.json(err));
};//update contact

//DELETE
export const deleteContact = (req,res)=>{
    Contact
        .remove({_id:req.params.contactId})
        .then((status)=>res.json(status))
        .catch((err)=>res.json(err));
};//delete contact