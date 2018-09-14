console.log('Initializing WebUI...');
var bodyParser = require('body-parser');    // npm install trash   ...oh wait no...    body-parser
var Sequelize = require('sequelize');       // npm install sequelize, mysql2    (database ORM)
var express = require('express');           // npm install express      (for serving web stuff)
var crypto = require('crypto');              
var path = require('path');
var fs = require('fs');
//var sqlite3 = require('sqlite3')          // npm install sqlite3      (for talking to sqlite3)
//var tedious = require('tedious')          // npm install tedious      (for talking to Microsoft SQL)

// Create express app
let app = new express();
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));

// Setup a post body parser because for some stupid reason this isn't default
app.use(bodyParser.json());                                 // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));         // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname + '/static')));  // Static routes

// Create ORM
const sequelize = new Sequelize(config.Server.SQL_DB, config.Server.SQL_User, config.Server.SQL_Pass, {
    host: config.Server.SQL_Host,
    port: config.Server.SQL_Port,
    dialect: 'mysql',
    define: {
        timestamps: false // Fixes a weird 'bug' with a column which we don't even have.
    }
});

// Import all models
const Users = sequelize.import(path.join(__dirname + '/../Database/models/Users.js'));
const Alerts = sequelize.import(path.join(__dirname + '/../Database/models/Alerts.js'))
const Clients = sequelize.import(path.join(__dirname + '/../Database/models/Clients.js'))
const InitialAuthKeys = sequelize.import(path.join(__dirname + '/../Database/models/InitialAuthKeys.js'))
const LogFiles = sequelize.import(path.join(__dirname + '/../Database/models/LogFiles.js'))
const LogSeries = sequelize.import(path.join(__dirname + '/../Database/models/LogSeries.js'))
const ServerStatus = sequelize.import(path.join(__dirname + '/../Database/models/ServerStatus.js'))

// URL Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

// API Routes
app.post('/api/authenticate', function(req, res) {
    if (req.body.AuthKey) {
        console.log('Got authentication request:', req.body.AuthKey, 'from', req.connection.remoteAddress);
    }
    // Check with the database
    InitialAuthKeys.findOne({
        where: {
            Key: req.body.AuthKey
        }
    }).then(InitialAuthKeys => {
        if (InitialAuthKeys) {
            console.log('Client Authenticated');
            var uk = crypto.randomBytes(48).toString('base64');
            console.log(uk);

            // Add its record to clients and that it's awaiting confirmation
            const ClientRecord = Clients.build({
                UserID: InitialAuthKeys.UserID,
                IP: req.connection.remoteAddress,
                InitialAuth: 'Awaiting Approval',
                Live: 'N',
                UniqueKey: uk
            });
            res.setHeader('Content-Type', 'application/json');
            ClientRecord.save().then(ClientRecord => {
                res.send({"Message": "Authentication Success. Awaiting User Approval.", "UniqueKey": uk});
            }).catch(error =>{
                res.send({"Message": "Issue contacting database."});
                console.warn('[Warning] - Client Record did not commit!', error);
            });
   
            
        } else {
            console.log('Not found!')
            res.send(false);
        }
    })
});

// Run WebUI
app.listen(config.WebUI.Port, config.WebUI.IP);
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port}.`);
