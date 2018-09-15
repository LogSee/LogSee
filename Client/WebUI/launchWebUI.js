console.log('Initializing WebUI...')
const express = require('express'); // Npm install express (for serving web stuff)
var fs = require('fs')
var path = require('path')  

// Create express app
let app = new express();

// Define Static files
app.use(express.static(path.join(__dirname + '/static')));
var config = JSON.parse(fs.readFileSync(__dirname + '/../config.json', 'utf8'));

// Routes
app.get('/', function(req, res) {
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
console.log(__dirname);