var fs = require('fs')

var config = JSON.parse(fs.readFileSync('./Client/config.json', 'utf8'));

console.log(config['DirsToScan'][0])