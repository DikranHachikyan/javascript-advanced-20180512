
export const routes = (app)=>{
    //GET: четене на данни
    app.route('/contact')
       .get((req,res,next)=>{
            res.send(`Get all contacts ${req.url} ${req.method}`);
            next();
       })
    //POST: добавяне на нови записи
       .post((req,res,next)=>{
            res.send(`Add New Contact: ${JSON.stringify(req.body)}`)
            next();
       });
    
    //PUT: промяна на съществуващи записи
    app.route('/contact/:contactId')
       .put((req,res,next)=>{
            res.send(`Update Contact Id:${req.params.contactId}`);
            next();
       })
    //DELETE: изтриване на записи
       .delete((req,res,next)=>{
            res.send(`Delete Contact Id:${req.params.contactId}`);
            next();
       });
};