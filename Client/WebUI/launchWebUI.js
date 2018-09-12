console.log('Initializing WebUI...')
const express = require('express'); // Npm install express (for serving web stuff)
var fs = require('fs')
var path = require('path')  

// Create express app
let app = new express();

// Define Static files
app.use(express.static(path.join(__dirname + '/static')));
var config = JSON.parse(fs.readFileSync('./Client/config.json', 'utf8'));

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});

// Run WebUI
app.listen(config.WebUI.Port, config.WebUI.IP);
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port}.`);
