/*
    Author: 
    Description: 
*/

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var fs = require('fs');
var path = require('path');

module.exports = {
	SendMailMessage: function(Recipient, Subject, Body) {
		var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));
		var FromAddress = config.Email.FromAddress;
		var SmtpServer = config.Email.SmtpServer;
		var SmtpPort = config.Email.SmtpPort;
		var SmtpSSL = config.Email.SmtpSSL;
		var Username = config.Email.Username;
		var Password = config.Email.Password;

		if (config.Email.Enabled) {
			var SmtpTransport = nodemailer.createTransport(smtpTransport, {
				host: SmtpServer,
				secureConnection: SmtpSSL,
				port: SmtpPort,
				auth: {
				  user: Username,
				  pass: Password
				}
			  });
			var MailOptions = {
				from: FromAddress,
				to: Recipient,
				subject: Subject,
				text: Body
				};
			SmtpTransport.sendMail(MailOptions, function(error, response) {
				if (error) {
					console.log(error);
				} else {
					console.log("Email Message Sent")
				}
				SmtpTransport.close();
				});
			}
		}
	}