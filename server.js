var express = require('express'),
    path = require('path'),
    router = require('./routes/router');

var app = express();

app.configure(function() {
    'use strict';
    app.set('port', 3000);
    //potrzebne do obslugi multipart form data, czyli wysylki plikow
    app.use(express.bodyParser());
    //path laczy fragmenty sciezki do pliku w calosc
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/register', router.addUser);
app.get('/users', router.showUsers);
app.get('/login', router.loginUser);

app.listen(app.get('port'), function() {
    'use strict';
    console.log('Application listen at http://localhost:3000/');
});