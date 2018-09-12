console.log('Initializing WebUI...')
const express = require('express'); // Npm install express (for serving web stuff)
var fs = require('fs')
var path = require('path')  

// Create express app
let app = new express();

// Define Static files
app.use(express.static('./Client/WebUI/static'))
var config = JSON.parse(fs.readFileSync('./Client/config.json', 'utf8'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'));
});


app.listen(config.WebUI.Port, function() {
    console.log(`WebUI listening on port ${config.WebUI.Port}.`);
})
