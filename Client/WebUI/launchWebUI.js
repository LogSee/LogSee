// Note: This file must be launched from runClient.js
// Note: This file must be launched from runClient.js
// Note: This file must be launched from runClient.js
console.log('Initializing WebUI...')
const express = require('express'); // Npm install express (for serving web stuff)
var fs = require('fs')
var path = require('path')  

// Create express app
let app = new express();

// Define Static files
app.use(express.static(path.join(__dirname + '/static')));
var config = JSON.parse(fs.readFileSync(__dirname + '/../config.json', 'utf8'));
var data = JSON.parse(fs.readFileSync(__dirname + '/../.data.json', 'utf8'));

// Keeps the data file up to date when changing the data variable
function UpdateData() {
    fs.writeFileSync(path.join(__dirname + '/../.data.json'), JSON.stringify(data)); // Todo: Needs sorting out with how files are launched.
};

// Routes
app.get('/', function(req, res) {
    if (!data.firstTime) { // First time loading the webUI, Todo: give them the config walkthrough
        data.firstTime = true;
        UpdateData();
        // Todo: Send a variable to the renderer.
    };
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/configure', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/configure.html'));
});
app.get('/status', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/status.html')); 
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html')); 
});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html')); 
});

// Run WebUI
module.exports = {
    WebUI: app
}
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port}.`);
