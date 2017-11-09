// server.js
const express = require('express');
const app = express();
const mongo = require('mongodb');    
const MongoClient = mongo.MongoClient;
const mongoUser = 'evildice';
const mongoPass = 'r3v3ng3';
const mongoDBName = 'evildice';
const mongoDBUrl = 'ds129090.mlab.com:29090';
const url = 'mongodb://' + mongoUser + ':' + mongoPass + '@' + mongoDBUrl + '/' + mongoDBName;

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});

///////////////////
app.get('/allUsers', function(req, res) {
     MongoClient.connect(url, function (err, db) {
         db.collection('users', function (err, collection){
          collection.find({}, function(err, result) {
              console.log(result);
              res.end(result);
          });
      });
  });
 
});

