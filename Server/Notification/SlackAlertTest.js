var path = require('path');
var test = require(path.join(__dirname + '/SlackAlert.js'));


console.log(typeof test.SendSlackNotification);
console.log("now we are equal on commits xD")
test.SendSlackNotification("I like trains lololol");
