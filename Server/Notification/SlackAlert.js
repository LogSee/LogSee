var request = require('request')
var fs = require('fs');
var path = require('path');

module.exports = {
    SendSlackNotification: function(Message) {
        var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));
        if (config.Notifications.Slack.Enabled) {
            var SlackWebhookURL = config.Notifications.Slack.SlackWebhookURL;
            var headers = {"Content-type": 'application/json'};
            var payload = {'text': 'Hello world'};
            payload = JSON.stringify(payload);

            request.post({url: SlackWebhookURL, body: payload, headers: headers}, function(err, res){
                if(err){console.log('Error', err)}
                if(res){console.log('Resp', res.body, res.statusCode)}
            })
        }
    }
};