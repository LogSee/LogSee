var request = require('request')
var fs = require('fs');
var path = require('path');

module.exports = {
    SendSlackNotification: function(Message) {
        var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));
        if (config.Notifications.Slack.Enabled) {
            var SlackWebhookURL = config.Notifications.Slack.SlackWebhookURL
            var payload = {'text':Message}
            payload = JSON.stringify(payload)
            var headers = {"Content-type": 'application/json'}

            request.post({url: SlackWebhookURL, payload: payload, headers: headers}, function(err, res){
                if(err){console.log(err)}
                if(res){console.log(res.body)}
            })
        }
    }
};