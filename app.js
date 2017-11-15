/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

// app.js
var express = require('express');
var db = require('./db');
var app = express();

var UserController = require('./user/UserController');
app.use('/users', UserController);

var UIController = require('./ui/UIController');
app.use('/app', UIController);

module.exports = app;
