// db.js
var mongoose = require('mongoose');
const mongoUser = process.env.MONGO_USER || '';
const mongoPass = process.env.MONGO_PASS || '';
const mongoDBName = process.env.MONGO_DBNAME || 'users';
const mongoDBUrl = process.env.MONGO_DBURL || 'localhost:27017';
const url = 'mongodb://' + mongoUser + ':' + mongoPass + '@' + mongoDBUrl + '/' + mongoDBName;
mongoose.connect(url);
