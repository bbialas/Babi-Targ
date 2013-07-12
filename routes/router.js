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



exports.addUser = function(req, res) {
    'use strict';
    var newUser = new User({login : req.body.login, pass : req.body.pass});
    newUser.save(function(err) {
        if (err) {
            console.log('blad'); //TODO: Trzeba obsluzyc blad
        } else {
            res.send('oki');
        }
    });

    User.find(function(err, users) {
        console.log(users);
    });
};
exports.showUsers =  function(req, res) {
    'use strict';
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