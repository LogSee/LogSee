var request = require('request')
var fs = require('fs');
var path = require('path');

module.exports = {
    SendSlackNotification: function(Message) {
        var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));
        if (config.Notifications.Slack.Enabled) {
            var SlackWebhookURL = config.Notifications.Slack.SlackWebhookURL;
            var LogSeeURL = config.WebUI.IP + ':' + config.WebUI.Port
            var headers = {"Content-type": 'application/json'};
            var payload = {
            "text": "LogSee Alert",
            "attachments": [
                {
                    "text": Message,
                    "fallback": "View on Logsee",
                    "color": "#ff0000",
                    "attachment_type": "default",
                    "actions": [
                        {
                            "name" : "View",
                            "text": "Open Logsee Web Panel",
                            "type": "button",
                            "value": "Open LogSee Web Panel",
                            "url": "http://LogSeeURL.com/panel"
                        }
                    ]
                }
            ]
            };
            payload = JSON.stringify(payload);

            request.post({url: SlackWebhookURL, body: payload, headers: headers}, function(err, res){
                if(err){console.log('Error', err)}
                if(res){console.log('Resp', res.body, res.statusCode)}
            })
        }
    }
};