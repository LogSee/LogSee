/*
    Author: Popzi
    Description: Test file
*/

var MongoClient = require('mongodb').MongoClient;


// Connect to the db
MongoClient.connect("mongodb://home.nerdcave.us:27017/exampleDb", function (err, db) {
	if (err) throw err;
	if (!err) console.log('Connected');
}); 