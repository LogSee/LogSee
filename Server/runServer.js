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
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/config.json'), 'utf8'));

// Setup a post body parser because for some stupid reason this isn't default
app.use(bodyParser.json());                                 // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));         // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname + '/WebUI/static')));  // Static routes

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
const Users = sequelize.import(path.join(__dirname + '/Database/models/Users.js'));
const Alerts = sequelize.import(path.join(__dirname + '/Database/models/Alerts.js'))
const Clients = sequelize.import(path.join(__dirname + '/Database/models/Clients.js'))
const InitialAuthKeys = sequelize.import(path.join(__dirname + '/Database/models/InitialAuthKeys.js'))
const LogFiles = sequelize.import(path.join(__dirname + '/Database/models/LogFiles.js'))
const LogSeries = sequelize.import(path.join(__dirname + '/Database/models/LogSeries.js'))
const ServerStatus = sequelize.import(path.join(__dirname + '/Database/models/ServerStatus.js'))

// URL Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/WebUI/templates/index.html'));
});

// API Routes
app.post('/api/authenticate', function(req, res) {
    // Authenticates a client
    res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

    // If Authkey but no unique key (first time registering)
    if (req.body.AuthKey && !req.body.UniqueKey) {
        // Check with the database
        InitialAuthKeys.findOne({
            where: {
                Key: req.body.AuthKey
            }
        }).then(InitialAuthKeys => {
            if (InitialAuthKeys) {
                console.log('Client authentication key is valid');
                // Add it as a new Client
                var uk = crypto.randomBytes(48).toString('base64');
                const ClientRecord = Clients.build({
                    UserID: InitialAuthKeys.UserID,
                    IP: req.connection.remoteAddress,
                    InitialAuth: 'Awaiting Approval',
                    Live: 'N',
                    UniqueKey: uk
                });
                ClientRecord.save().then(ClientRecord => {
                    res.status(201).send({"Message": "New client has been registered. Awaiting user approval via server interface.", "UniqueKey": uk});
                }).catch(error =>{
                    res.status(500).send({"Message": "Issue contacting database. Please try again later."});
                    console.warn('[Warning] - Client Record failed to commit!', error);
                });
            } else {
                res.status(403).send({"Message": "Denied. Incorrect Authentication Key."});
            };
        });
    };

    // If they've specified a unqiue key, use that instead (incase the authkey has expired since then)
    if (req.body.UniqueKey) {
        Clients.findOne({
            where: {
                UniqueKey: req.body.UniqueKey
            }
        }).then(Clients => {
            if (Clients) {
                if (Clients.InitialAuth == 'Approved') {
                    res.status(200).send({"Message": "Authentication Approved."})
                } else if (Clients.InitialAuth == 'Denied') {
                    res.status(403).send({"Message": "You have been denied authentication approval."})
                } else {
                    res.status(401).send({"Message": "You are still awaiting authentication approval which can be done via the server dashboard."})
                };
            } else {
                res.status(404).send({"Message": "No record for this unique key was found."})
            };
        });
    };
});

app.post('/api/pingpong', function(req, res) {
    // Updates the client table with a timestamp of request, used to check if a client is offline due to no response in x minutes.
    res.setHeader('Content-Type', 'application/json'); // Make all our responses json format
    if (req.body.UniqueKey) {
        Clients.update(
            {LastPing: Date.now()}, 
            {where: {UniqueKey: req.body.UniqueKey}}
        );
        res.status(200).send({"Message": "Pong"});
    } else {
        res.status(400).send({"Message": "No UniqueKey specified."})
    };
});

app.post('/api/addfiles', function(req, res) {
    // Adds files from the client as database objects and returns the database object ID that the client will use in future data additions
    res.setHeader('Content-Type', 'application/json'); // Make all our responses json format
    checkClient(req.body.UniqueKey, function(record) {  // check with the database that the client is valid (returns true/false callback)
        if (record) { // If it is a valid client

            const promise = Promise.all(req.body.Data.map(thisData => { // .map passes the data to the promise
                console.log(thisData);
                return LogFiles.findOne({
                    where: {
                        Filename: thisData.filename,
                        $and: {
                            Filepath: thisData.filepath,
                            ClientID: record.ID,
                        },
                    }
                }).then(result => {
                    if (result) {
                        console.log(`AddFiles: ${thisData.filename} already in database with ID ${result.ID}`);
                        thisData.ID = result.ID;
                        thisData.size = result.Size;
                        return thisData;
                    } else {
                        console.log(`AddFiles: Adding ${thisData.filename} to database...`);
                        return LogFiles.build({
                            ClientID: record.ID,
                            Filename: thisData.filename,
                            Filepath: thisData.filepath,
                            RetentionDays: 30,
                            Size: thisData.size
                        }).save().then(thisRecord => {
                            console.log('AddFiles: Created with ID', thisRecord.ID);
                            thisData.ID = thisRecord.ID;
                            return thisData;
                        })
                    };
                });
            }));

            promise.then(result => {
                res.status(200).send({"Message": result});
            }).catch(err => {
                console.log('[Warning]', err);
            });

        } else { // If it's not a valid client
            res.status(403).send({"Message": "The specified UniqueKey was incorrect or this client is no longer marked as active."});
        };
    });
});

app.post('/api/listclients', function(req, res) {
    // Lists all the clients belonging to a user
    res.setHeader('Content-Type', 'application/json'); // Make all our responses json format
    checkClient(req.body.UniqueKey, function(record) {
        if (record) {
            Clients.findAll({
                where: {
                    UserID: record.UserID
                }
            }).then(result => {
                if (result) {
                    res.status(200).send({"UserID": record.UserID, "Message": result})
                };
            });
        } else {
            res.status(403).send({"Message": "The specified UniqueKey was incorrect or this client is no longer marked as active."});
        };
    });
});

app.post('/api/lastLine', function(req, res) {
    // Gets the last line value from our LogFiles table and returns in
})

// Helper functions
function checkClient(TUniqueKey, callback) { // Checks if the client is live and valid via unqiue key, will return client data if so, false if not.
    Clients.findOne({
        where: {
            UniqueKey: TUniqueKey,
            $and: {Live: 'Y'}
        }
    }).then(record => {
        if (record) {
            return callback(record);
        } else {
            return callback(false);
        };
    });
};


// Run WebUI
app.listen(config.WebUI.Port, config.WebUI.IP);
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port}.`);
 