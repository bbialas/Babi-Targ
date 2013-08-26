var mongoose = require('mongoose'),
    crypto = require('crypto');
mongoose.connect('mongodb://localhost:27017/babi_targ');

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
    var md5Sum = crypto.createHash('md5'),
        userLogin = req.query.login,
        userPassword = md5Sum.update(req.query.password).digest('hex'),
        newUser;
        
    newUser = new User(
        {login: userLogin, password: userPassword}
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
    console.log('LOGIN USER');
    var userName = req.query.login;
    var userPass = req.query.password;

    User.findOne(
        {'login' : userName, 'password' : userPass},
        'login',
        function(err, user) {
            if (err) {
                console.log('blad'); //TODO: Trzeba obsluzyc blad
            } else {
                if (user !== null) {
                    res.send('{"userId":"'+user.id+'", "userLogin":"'+
                    user.login+'"}');
                } else {
                    res.send('0');
                }
            }
        }
    );
};