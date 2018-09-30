// Note: This file must be launched from runClient.js
// npm install pug
// Npm install express
console.log('Initializing WebUI...')
const express = require('express'); 
var fs = require('fs')
var path = require('path')  

// Create express app
let app = new express();
var config = JSON.parse(fs.readFileSync(__dirname + '/../config.json', 'utf8'));
var data = JSON.parse(fs.readFileSync(__dirname + '/../.data.json', 'utf8'));

// Define Static files & renderer
app.use('/static', express.static(path.join(__dirname + '/static')));
app.set('view engine', 'pug') // npm install pug !!
app.set('views', path.join(__dirname + '/views'))

function UpdateData() { // Keeps the data file up to date when changing the data variable
    fs.writeFileSync(path.join(__dirname + '/../.data.json'), JSON.stringify(data)); // Todo: Needs sorting out with how files are launched.
};

// Routes
app.get('/', function(req, res) {
    if (!data.firstTime) { // First time loading the webUI, Todo: give them the config walkthrough
        data.firstTime = true;
        UpdateData();
        // Todo: Send a variable to the renderer.
    };
   // res.sendFile(path.join(__dirname + '/views/index.html'));
   res.render('index', {data: data});
});
app.get('/configure', function(req, res) {
    res.render('configure');
});
app.get('/status', function(req, res) {
    res.render('status');
});
app.get('/about', function(req, res) {
    res.render('about'); 
});
app.get('/login', function(req, res) {
    res.render('login');
});

// Run WebUI
app.listen(config.WebUI.Port, config.WebUI.IP);
console.log(`WebUI listening on http://${config.WebUI.IP}:${config.WebUI.Port} from root ${__dirname}`);
