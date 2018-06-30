import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type:String,
        required: 'First name is required'
    },
    lastName: {
        type:String,
        required: 'Last name is required'
    },
    email:{
        type: String,
        required:'E-mail is required'
    },
    phone:{
        type:String
    },
    created:{
        type:Date,
        default:Date.now
    }

});