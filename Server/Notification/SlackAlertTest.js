var path = require('path');
var test = require(path.join(__dirname + '/SlackAlert.js'));


console.log(typeof test.SendSlackNotification);
test.SendSlackNotification("Test");
