/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../model/user');

// CREATES A NEW USER
/*router.post('/', function (req, res) {
    User.create({
            username : req.body.username,
            password : req.body.password
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});*/
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    console.log('finding users...');
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

router.post('/auth', function (req, res){
    console.log('Authenticating...' + req.body.username + '/' + req.body.password);
    User.find(
        { username: req.headers.username,
          password: req.headers.password  },
        function(err, users){
            if (err) return res.status(500).send('Server error while authenticating');
            console.log(users);
            if (users.length == 0) {
                return res.status(401).send('Unauthorized!');
            }
            res.status(200).send({message: 'Authentication successfull'});
        });
});

module.exports = router;
