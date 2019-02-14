/*
    Author: Popzi
    Description: Bundles up the models so they can all be imported as `models = require('Database')` and referenced.
*/
exports.Alerts = require('./models/Alerts');
exports.Clients = require('./models/Clients');
exports.InitialAuthKeys = require('./models/InitialAuthKeys');
exports.LogFiles = require('./models/LogFiles');
exports.LogSeries = require('./models/LogSeries');
exports.NotificationsQueue = require('./models/NotificationsQueue');
exports.ServerStatus = require('./models/ServerStatus');
exports.Users = require('./models/Users');
exports.ViewLogs = require('./models/ViewLogs');
