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


exports.addUser = function(req, res) {
	var newUser = new User({f_login : req.body.f_login, f_pass : req.body.f_pass});
	newUser.save(function(err) {
		if (err) {
			
		} else {
			res.send('oki');
		}
	});
	
	User.find(function(err, users) {
		console.log(users);
	});
};
exports.showUsers =  function(req, res) {
	User.find(function(err, users) {
		res.send(users);
	});
};

/**
 * User authorization
 * 
 * @param {Object} req
 * @param {Object} res
 */
exports.loginUser =  function(req, res) {
	var userName = req.query.f_login;
	var userPass = req.query.f_pass;
	
	User.findOne({'f_login' : userName, 'f_pass' : userPass}, 'f_login', function(err, user) {
		if (err) {
			return handleError(err);
		}
		res.send('dane dotarly - logowanie');
		console.log(user.f_login);
	});
};
