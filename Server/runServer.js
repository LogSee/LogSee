/*
	Author: Popzi, Ainsey
	Description: Express API, serves dist files from Angular in WebUI/Dist
*/

var bodyParser = require('body-parser');    // npm install trash   ...oh wait no...    body-parser
var Sequelize = require('sequelize');       // npm install sequelize, mysql2    (database ORM)
var express = require('express');           // npm install express      (for serving web stuff)
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');

// Create express app
console.log('Initializing WebUI...');
console.log(__dirname);
let app = new express();
app.use(bodyParser.json({ limit: '500mb' }));                         // Setup a post body parser and set its limit, Unlikely that the client will ever be sending 500mb+ of data across at a given time...
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));   // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname + '/WebUI/dist/LogSee-Angular')));    // Static routes
const config = JSON.parse(fs.readFileSync(path.join(__dirname + '/config.json'), 'utf8'));

// Create ORM
const sequelize = new Sequelize(config.SQL.SQL_DB, config.SQL.SQL_User, config.SQL.SQL_Pass, {
	host: config.SQL.SQL_Host,
	port: config.SQL.SQL_Port,
	dialect: config.SQL.DBMS,   // Currently supports mysql, postgres, mssql
	define: {
		timestamps: false       // Fixes a weird 'bug' with a column which we don't even have.
	}
});

// Import all models
const models = require('./Database')
const Users = sequelize.import(models.Users);
const Alerts = sequelize.import(models.Alerts);
const Clients = sequelize.import(models.Clients);
const InitialAuthKeys = sequelize.import(models.InitialAuthKeys);
const LogFiles = sequelize.import(models.LogFiles);
const LogSeries = sequelize.import(models.LogSeries);
const ServerStatus = sequelize.import(models.ServerStatus);
const NotificationsQueue = sequelize.import(models.NotificationsQueue);



// URL / WebUI Routes
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/WebUI/dist/LogSee-Angular/index.html'));

});

// API Routes
app.post('/api/authenticate', function (req, res) {
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
					res.status(201).send({ "Message": "New client has been registered. Awaiting user approval via server interface.", "UniqueKey": uk });
				}).catch(error => {
					res.status(500).send({ "Message": "Issue contacting database. Please try again later." });
					console.warn('[Warning] - Client Record failed to commit!', error);
				});
			} else {
				res.status(403).send({ "Message": "Denied. Incorrect Authentication Key." });
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
					res.status(200).send({ "Message": "Authentication Approved." })
				} else if (Clients.InitialAuth == 'Denied') {
					res.status(403).send({ "Message": "You have been denied authentication approval." })
				} else {
					res.status(401).send({ "Message": "You are still awaiting authentication approval which can be done via the server dashboard." })
				};
			} else {
				res.status(404).send({ "Message": "No record for this unique key was found." })
			};
		});
	};
});

app.post('/api/pingpong', function (req, res) {
	// Updates the client table with a timestamp of request, used to check if a client is offline due to no response in x minutes.
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format
	if (req.body.UniqueKey) {
		Clients.update({ LastPing: Date.now() }, { where: { UniqueKey: req.body.UniqueKey } });
		res.status(200).send({ "Message": "Pong" });
	} else {
		res.status(400).send({ "Message": "No UniqueKey specified." })
	};
});

app.post('/api/addfiles', function (req, res) {
	// Adds files from the client as database objects and returns the database object ID that the client will use in future data additions
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

	checkClientPromise(req.body.UniqueKey, res)
		.then(record => {
			if (record) { // If it is a valid client
				const promise = Promise.all(req.body.Data.map(thisData => { // .map passes the data to the promise
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
							thisData.lastLine = result.LastLine;
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
					res.status(200).send({ "Message": result });
				})
					.catch(err => {
						console.log('[Warning]', err);
					});

			} else { // If it's not a valid client
				res.status(403).send({ "Message": "The specified UniqueKey was incorrect or this client is no longer marked as active." });
			};
		})
});

app.post('/api/listclients', function (req, res) {
	// Lists all the clients belonging to a user
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

	checkClientPromise(req.body.UniqueKey)
		.then(record => {
			Clients.findAll({
				where: {
					UserID: record.UserID
				}
			})
				.then(result => {
					if (result) {
						res.status(200).send({ "UserID": record.UserID, "Message": result })
					};
				});
		})
});

app.post('/api/getfile', function (req, res) {
	// Gets the last line value from our LogFiles table and returns in
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

	checkClientPromise(req.body.UniqueKey, res)
		.then(record => {

			LogFiles.findOne({
				where: { ID: req.body.Data.ID },
				$and: { ClientID: record.ID }
			}).then(result => {
				if (result) {
					res.status(200).send(result);
				} else {
					res.status(404).send();
				}
			});
		});
});

app.post('/api/addseries', function (req, res) {
	// Adds a new LogSeries record and updates the DB copy of the file accordingly
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

	checkClientPromise(req.body.UniqueKey, res)
		.then(record => {
			console.log('Got Data');
			console.log(req.body.Data);
			// Update the appropiate `LogFiles` file metadata
			LogFiles.update({
				LastLine: req.body.Data.lastLine,
				Size: req.body.Data.size,
			},
				{
					where: {
						ID: req.body.Data.ID,
						$and: {
							ClientID: record.ID,
							Filename: req.body.Data.filename,
							Filepath: req.body.Data.filepath
						}
					}
				}).then(result => {
					if (result == 1) { // If a row was updated
						console.log(`AddSeries: LogFile ${req.body.Data.ID} was updated with new metadata`);
						res.status(200).send({ 'Message': `Success. Created ID: ${req.body.Data.ID}` });
					} else {
						console.log('SENDING 400');
						res.status(404).send();
					}
				});

			// Add the data to the series table.
			LogSeries.build({
				LogFileID: req.body.Data.ID,
				Data: req.body.Data.fileData
			}).save().then(record => {
				console.log(`AddSeries: Created series with ID ${record.ID}`);
			});

		});
});

app.post('/api/updatefile', function (req, res) {
	// Updates a DB file record with a new one. Given record must contain all column values.
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

	checkClientPromise(req.body.UniqueKey, res)
		.then(record => {

		})

});

app.post('/api/errorhandle', function (req, res) {
	// Recieves errors from the client that the client and puts them into the Alert table so that the user can read them at their own leisure.
	res.setHeader('Content-Type', 'application/json'); // Make all our responses json format

	checkClientPromise(req.body.UniqueKey, res)
		.then(record => {
			// Add the issue to the DB
			Alerts.build({
				ClientID: record.ID,
				Severity: req.body.Data.Severity,
				Message: req.body.Data.Message,
				Traceback: req.body.Data.Traceback
			}).save().then(thisRecord => {
				console.log('ErrorHandle: Alert created with ID', thisRecord.ID);
			});
			// Todo: Notify user
		})
});


// Helper functions
// Checks the client UniqueKey with the database, returns true or automatic response
const checkClientPromise = function (UniqueKey_Var, res) { // res needed to send automatic denial responses.
	return new Promise(function (resolve, reject) {
		Clients.findOne({
			where: {
				UniqueKey: UniqueKey_Var,
				$and: { Live: 'Y' }
			}
		})
			.then(record => {
				if (record && record.Live == 'Y') {
					resolve(record);
				} else {
					// Automatically sends deny message instead of writing it out in a .catch() on each call
					res.status(403).send({ "Message": "Denied. Incorrect UniqueKey given or this client is no longer marked as live." });
				};
			})
			.catch(err => reject(err));
	})
		.catch(err => reject(err));
};

// Run WebUI
app.listen(config.WebUI.Port, config.WebUI.IP);
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port}`);
