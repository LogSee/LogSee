var fs = require('fs')
var ini = require('ini')

var config = ini.parse(fs.readFileSync('./client/config.ini', 'utf-8'))

console.log(config.WebUI.PORT);