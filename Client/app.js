var fs = require('fs') // Nodes file system
var path = require('path') // For managing paths, ofcourse.

// Parse config file
var config = JSON.parse(fs.readFileSync('./Client/config.json', 'utf8'));



// Iterate over each file
for (var f = 0; f < config['PathsToScan'].length; f++) {

    // Does this dir/file actually exist?
    if (fs.existsSync(config.PathsToScan[f].Location)) {
        var tf = config.PathsToScan[f] // This File (tf)

        // Have we made note of it's size in memory?    Note: May want to put in an init() func
        if (!tf.size) {
            tf.size = fs.statSync(tf.Location).size;
            console.log('New size added for file', tf.Location)
        };

        // Have we seperated its file name?             Note: May want to put in an init() func
        if (!tf.filename) {
            tf.filename = path.basename(tf.Location);
        }

        // Is this a directory (Are we scanning every .log file?)
        if (tf.ScanDirectory) {
            // Do some shit.
        };

        // If the byte size != the previously logged byte size for that item, read it.
        console.log(fs.statSync(tf.Location).size);


    } else {
        console.warn('[Warning] The file', config.PathsToScan[f].Location, 'does not exist!')
    };
}