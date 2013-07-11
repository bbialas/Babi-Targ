var express = require('express'),
	path = require('path'),
	router = require('./routes/router');

var app = express();

app.configure(function() {
	app.set('port', 3000);
	app.use(express.bodyParser()); //potrzebne do obslugi multipart form data, czyli wysylki plikow
	app.use(express.static(path.join(__dirname, 'public'))); //path laczy fragmenty sciezki do pliku w calosc
});

app.post('/register', router.addUser);
app.get('/users', router.showUsers);
app.get('/login', router.loginUser);

app.listen(app.get('port'), function() {
	console.log('Application listen at http://localhost:3000/');
});