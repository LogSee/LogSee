var request = require('request');
var fs = require('fs');
var path = require('path');

module.exports = {
  SendAndroidPushNotification: function(MessageTitle, Message) {
    var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));
      if (config.Notifications.Simplepush.Enabled) {
        var SimplepushAPIKey = config.Notifications.Simplepush.Key;
        var url = `https://api.simplepush.io/send/${SimplePushAPIKey}/${MessageTitle}/${Message}`;
        request(url, function (error, response) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response, response.statusCode); // Print the response status code if a response was received
        });
    }
  }
};