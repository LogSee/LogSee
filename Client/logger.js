// Configurations of logger.
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
  new winston.transports.Console({
    'colorize': true
  })
];

const createLogger = new winston.Logger({
  'transports': consoleConfig
});

const Logger = createLogger;
Logger.add(winstonRotator, {
  'name': 'access-file',
  'level': 'info',
  'filename': './logs/LogSee-Client.log',
  'json': false,
  'datePattern': 'dd-MM-yyyy-',
  'prepend': true
});

module.exports = {
  'errorlog': Logger
};