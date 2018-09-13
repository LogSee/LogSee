console.log('Initializing WebUI...')
const express = require('express');         // Npm install express (for serving web stuff)
var bodyParser = require('body-parser');    // npm install trash   ...oh wait no...    body-parser
var fs = require('fs')
var path = require('path')  

// Create express app
let app = new express();
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
