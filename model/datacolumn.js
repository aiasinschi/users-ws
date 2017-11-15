/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var dcSchema = new Schema({
    name: String,
    label: String,
    index: String,
    type: String
});

mongoose.model('DataColumn', dcSchema);
module.exports = mongoose.model('DataColumn');
