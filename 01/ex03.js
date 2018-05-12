'use strict'

const app = {
    title:'Web App',
    url: 'http://localhost',
    path:'/site/'
};

app.title = 'Blog';

console.log(app);

app.image_path = '/images/';

console.log(app);

delete app.url;

console.log(app);

app = {
    x:100,
    y:200
};

console.log(app);