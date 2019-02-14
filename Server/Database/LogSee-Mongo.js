/*
    Author: Popzi
    Description: Test file
*/

var MongoClient = require('mongodb').MongoClient;


// Connect to the db

MongoClient.connect("mongodb://home.nerdcave.us:27017/exampleDb", function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }); 