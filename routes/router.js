var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Baza ok :) Polaczono.');
});

var userSchema = mongoose.Schema({
	f_login: String,
	f_pass: String
});
var User = mongoose.model('User', userSchema);




User.find(function(err, users) {
		console.log(users);
	});

exports.addUser = function(req, res) {
	console.log(JSON.stringify(req.body));
	//var newUser = new User({f_login:'a', f_pass:'b'});
	//newUser.save();
	/*User.find(function(err, users) {
		console.log(users);
	});*/
};