/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-disable no-console*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DataColumn = require('./datacolumn');

// set up a mongoose model and pass it using module.exports
var udSchema = new Schema({
    name: String,
    label: String,
    content: String,
    columnSeparator: String,
    columns: [{type:mongoose.Schema.Types.ObjectId, ref: 'DataColumn'}]
});

mongoose.model('UserData', udSchema);
module.exports = mongoose.model('UserData');
