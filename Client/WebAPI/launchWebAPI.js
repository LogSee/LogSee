// Note: This file must be launched from runClient.js
// npm install pug
// Npm install express
console.log('Initializing WebAPI...');
const express = require('express'); 
var bodyParser = require('body-parser');    // npm install trash   ...oh wait no...    body-parser
var fs = require('fs');
var path = require('path');
var child_process = require("child_process");

// Create express app
let app = new express();
var config = JSON.parse(fs.readFileSync(__dirname + '/../config.json', 'utf8'));
var data = JSON.parse(fs.readFileSync(__dirname + '/../.data.json', 'utf8'));

// Define Static files & renderer
app.use('/static', express.static(path.join(__dirname + '/static')));
app.set('view engine', 'pug'); // npm install pug !!
app.set('views', path.join(__dirname + '/views'));
app.use(bodyParser.json({limit: '500mb'}));                         // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '500mb'}));   // for parsing application/x-www-form-urlencoded

// Routes
app.get('/', function(req, res) {
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

// API Points
app.post('/api/editconfig', function(req, res) {
    // The API point to edit the clients configuration json file.
    // Multiple changes can be made by simpling giving more json to the api point.
    // Todo: [Option] ReturnConfig: Boolean               // Will return the current client JSON configuration, default true
    // Example POST request
    // {
    //     Client: {
    //         LogSee_Host: "1.2.3.4"
    //     },
    //     WebUI: {
    //         AuthUser: "Dave",
    //         secondary: {
    //             egg: 'sss',
    //         }
    //     },
    // }

    let output = {};

    // Go through the request, does the config have what they're looking for?
    function explore(obj, stack = '') {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {                         // If it has a child
                if (typeof obj[property] == "object") {                 // And the child is an object
                    explore(obj[property], stack + '/' + property);     // Explore it                            ...                                                                                                                                                               I am not a pedophile.
                } else {
                    // Is this end result in our client config?
                    stack = stack + '/' + property;
                    console.log('---------------------')
                    console.log(`LF ${property}: ${obj[property]} (${stack})`);
                    updateInConfig(stack.split('/').splice(1, stack.length), obj[property])
                    console.log(config);
                }
            }
        }
    }

    // Go through the parsed json and search for it in the config, if its there, update it, if not, add a warning to the message
    function updateInConfig(stack, newValue, currentView = config, position = 0) {
        //console.log('Im looking here', position, stack.length-1, stack[position],'>', stack[position + 1]);
        if (position < stack.length - 1) {
            updateInConfig(stack, newValue, currentView[stack[position]], position + 1);
        } else {
            console.log('Found', currentView[stack[position]]);
            if (currentView[stack[position]]) {
                currentView[stack[position]] = newValue
                console.log('Updated to', newValue);
            } else {
                if (!output.Warning) output.Warning = [];
                output.Warning.push(`${stack[position]} is not an editable key in the config.`)
            }
        }
    }

    // Do the things.
    explore(req.body)
    output.Message = config;
    //Todo: if (req.body['returnConfig'] && req.body['returnConfig'] == false) output.Message = 'OK';
    fs.writeFileSync(path.join(__dirname + '/../config.json'), JSON.stringify(config, null, 4)); // Update config file with the new
    res.setHeader('Content-Type', 'application/json'); // Make our responses json format
    res.status(200).send(output);
});

app.post('/api/stop', function(req, res) {
    process.exit();
});


// Run WebAPI
app.listen(config.WebAPI.Port, config.WebUI.IP);
console.log(`WebAPI listening on http://${config.WebUI.IP}:${config.WebAPI.Port}`);
