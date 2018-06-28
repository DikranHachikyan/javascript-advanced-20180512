import express from 'express';
import bodyParser from 'body-parser';

import {routes} from './src/routes';

const app = express();
const PORT = process.env.PORT || 3000 ;
const HOST = '127.0.0.1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Middleware
// app.use('/blog/',(req,res,next)=>{
//     console.log('my middleware');
//     next();
// })

//routes (endpoints)
routes(app);

app.get('/', (req, res, next)=>{
    res.send(`<h1>Express Web App</h1>`);
});

app.listen(PORT, HOST, ()=>{
    process.stdout.write(`Listen on ${HOST}:${PORT}`);
});