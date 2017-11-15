/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../model/user');

var buildTable = function(users) {
    var res = '<html><head><style>table  {border-spacing: none;} td, th {border: 1px solid #DEDEFF;}</style></head><body><table>' ;
    res += '<tr><th>Name</th> <th>UserName</th> <th>e-mail</th> <th>admin</th></tr>';
    for (var i = 0; i < users.length; i++) {
        res += '<tr><td>' + users[i].name + '</td> <td>' + users[i].username + '</td> <td>' + users[i].email + '</td> <td>' + users[i].admin + '</td></tr>'
    }
    res += '</table></body></html>';
    return res;
}

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    console.log('Serving users page...');
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        console.log(users);
        res.status(200).send(buildTable(users));
    });
});

module.exports = router;
