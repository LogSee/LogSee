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

var MysqlEvents = require('mysql-events');
var dsn = {
    host: config.Server.SQL_Host,
    user: config.Server.SQL_User,
    password: config.Server.SQL_Pass
};

var MysqlEventWatcher = MysqlEvents(dsn);

var watcher = MysqlEventWatcher.add('LogSee.LogSeries',function(oldRow, newRow) {
    if (oldRow === null) {
        console.log(newRow);
    }
});
