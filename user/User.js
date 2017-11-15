/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

// User.js
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
mongoose.model('TestUser', UserSchema);
module.exports = mongoose.model('TestUser');
