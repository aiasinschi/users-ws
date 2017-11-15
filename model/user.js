/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserData  = require('./userdata');

// set up a mongoose model and pass it using module.exports
var uSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    admin: Boolean,
    dataSets: [{type:mongoose.Schema.Types.ObjectId, ref:'UserData'}]
});

mongoose.model('User', uSchema);
module.exports = mongoose.model('User');
