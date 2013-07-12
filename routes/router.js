var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    'use strict';
    console.log('Baza ok :) Polaczono.');
});

var userSchema = mongoose.Schema({
    login: String,
    password: String
});
var User = mongoose.model('User', userSchema);


exports.showUsers =  function(req, res) {
    'use strict';
    User.find(function(err, users) {
        res.send(users);
    });
};

/**
 * User registration
 * 
 * @param {Object} req
 * @param {Object} res
 */
exports.addUser = function(req, res) {
    'use strict';
    var newUser = new User(
        {login : req.query.login, password : req.query.password}
    );
    newUser.save(function(err) {
        if (err) {
            console.log('Kod bledu: ' + err); //TODO: Trzeba obsluzyc blad
            res.send('0');
        } else {
            res.send('1');
        }
    });
};

/**
 * User authorization
 * 
 * @param {Object} req
 * @param {Object} res
 */
exports.loginUser =  function(req, res) {
    'use strict';
    var userName = req.query.login;
    var userPass = req.query.password;

    User.findOne(
        {'login' : userName, 'password' : userPass},
        'login',
        function(err, user) {
            if (err) {
                console.log('blad'); //TODO: Trzeba obsluzyc blad
            }
            res.send('dane dotarly - logowanie');
            console.log(user.login);
        }
    );
};