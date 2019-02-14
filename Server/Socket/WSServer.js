/*
    Author: Ainsey
    Description: 
*/

var http = require('http');
var port = 3400;
var server = http.createServer(function(req, res) {});
var io = require('socket.io').listen(server);
var fs = require('fs');
var path = require('path');
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));

server.listen(port, function() {
    console.log('Server is running on port ' + port + '…');
});

var MySQLEvents = require('mysql-events');
var dsn = {
  host:     config.Server.SQL_Host,
  user:     config.Server.SQL_User,
  password: config.Server.SQL_Pass
};
var mysqlEventWatcher = MySQLEvents(dsn);
console.log(mysqlEventWatcher);
var watcher =mysqlEventWatcher.add(
   'LogSee.LogSeries',
  function (oldRow, newRow, event) {
     //row inserted
    if (oldRow === null) {
      //insert code goes here
    }

     //row deleted
    if (newRow === null) {
      //delete code goes here
    }

     //row updated
    if (oldRow !== null && newRow !== null) {
      //update code goes here
    }

    //detailed event information
    console.log(event); // don't matter, it updates, delete or insert
  },
  'Active'
);