var path = require('path');
var test = require(path.join(__dirname + '/../EmailSend.js'));

console.log(typeof test.SendMailMessage);
test.SendMailMessage("ainsey11@gmail.com", "Test", "Test");
