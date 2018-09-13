console.log('Initializing WebUI...');
console.log(__dirname);

var bodyParser = require('body-parser');    // npm install trash   ...oh wait no...    body-parser
var Sequalize = require('sequelize');       // npm install sequelize, mysql2    (database ORM)
var express = require('express');           // npm install express      (for serving web stuff)
//var sqlite3 = require('sqlite3')          // npm install sqlite3      (for talking to sqlite3)
//var tedious = require('tedious')          // npm install tedious      (for talking to Microsoft SQL)
var path = require('path');
var fs = require('fs');
var Alerts = require(path.join(__dirname + '/../Database/Alerts.js'))
var Clients = require(path.join(__dirname + '/../Database/Clients.js'))
var InitialAuthKeys = require(path.join(__dirname + '/../Database/InitialAuthKeys.js'))
var LogFiles = require(path.join(__dirname + '/../Database/LogFiles.js'))
var LogSeries = require(path.join(__dirname + '/../Database/LogSeries.js'))
var ServerStatus = require(path.join(__dirname + '/../Database/ServerStatus.js'))
var Users = require(path.join(__dirname + '/../Database/Users.js'))

// Get config
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));

// Create express app
let app = new express();

// Create ORM
const sequalize = new Sequalize(`mysql://${config.Server.SQL_User}:${config.Server.SQL_Pass}@${config.Server.SQL_Host}:${config.Server.SQL_Port}/${config.Server.SQL_DB}`);

// Test ORM
sequalize.query('SELECT * FROM `Users`;').then(rows => {
    console.log(JSON.stringify(rows))
});


// Setup a post body parser because for some stupid reason this isn't default
app.use(bodyParser.json());                             // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));     // for parsing application/x-www-form-urlencoded

// Define Static files
app.use(express.static(path.join(__dirname + '/static')));
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

// API points
app.post('/api/authenticate', function(req, res) {
    console.log(req.body);
    res.send(true);
});

// Run WebUI
app.listen(config.WebUI.Port, config.WebUI.IP);
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port}.`);
