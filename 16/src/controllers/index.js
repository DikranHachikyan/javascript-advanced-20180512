import mongoose from 'mongoose';
import {ContactSchema} from '../models';

const Contact = mongoose.model('Contact', ContactSchema);

