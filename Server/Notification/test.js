var path = require('path');
var test = require(path.join(__dirname + '/AndroidPush.js')) ;
console.log(test);
test.SendAndroidPushNotification('Test','Test');
