var path = require('path');
var test = require(path.join(__dirname + '/../AndroidPush.js'));


console.log(typeof test.SendAndroidPushNotification);
test.SendAndroidPushNotification('Test','Test');
