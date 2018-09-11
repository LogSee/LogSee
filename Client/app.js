var fs = require('fs') // Nodes file system
var path = require('path') // For managing paths, ofcourse.

// Parse config file
var config = JSON.parse(fs.readFileSync('./Client/config.json', 'utf8'));

function Init() { // Same code to below but slightly different, I feel like it could be optimized somehow...
    for (var f = 0; f < config['PathsToScan'].length; f++) {
        if (fs.existsSync(config.PathsToScan[f].Location)) { // Does this dir/file actually exist on our system?
            var tf = config.PathsToScan[f] // This File/dir (tf)
            if (fs.lstatSync(config.PathsToScan[f].Location).isFile()) { // Is it a file or a directory?
                // It's a file.
                //
                // Todo: iterate over the PathsToScan and see if the database has data on them. If so: count how many lines the database has stored and continue from there. We need to make the API first.
                //
            } else if (fs.lstatSync(config.PathsToScan[f].Location).isDirectory()) {
                // It's a directory.
                //
                // Todo: iterate over the PathsToScan and see if the database has data on them. If so: count how many lines the database has stored and continue from there. We need to make the API first.
                //
            } else {
                console.warn(`[Warning] I'm unable to detect what "${config.PathsToScan[f].Location}" is. It may be a socket or symlink.`);
            };
        } else {
            console.warn(`[Warning] The file "${config.PathsToScan[f].Location}" does not exist!`);
        };
    };
}

// Populates config data with name and size.
function PopulateMeta(obj) {
    if (!obj.Location) {
        console.warn(`[Warning] Location missing for ${obj}`);
        return false;
    };
    // Have we seperated its file name for ease?    Note: May want to put in an init() func
    if (!obj.filename) {
        obj.filename = path.basename(obj.Location);
    };
    // Have we made note of it's size in memory?    Note: May want to put in an init() func
    if (!obj.size) {
        obj.size = fs.statSync(obj.Location).size;
        console.log(`New size added for file "${obj.filename}" (${obj.size})`)
    };
    return true;
};

function ScanFiles() {
    setInterval(function() {
        // Iterate over each file
        for (var f = 0; f < config['PathsToScan'].length; f++) {

            // Does this dir/file actually exist on our system?
            if (fs.existsSync(config.PathsToScan[f].Location)) {
                var tf = config.PathsToScan[f] // This File/dir (tf)

                // Is it a file or a directory?
                if (fs.lstatSync(config.PathsToScan[f].Location).isFile()) {
                    // It's a file.
                    
                    PopulateMeta(tf);

                    // If the byte size != the previously logged byte size for that item, read it.
                    if (fs.statSync(tf.Location).size != tf.size) {
                        console.log(`New file size detected on file "${tf.filename}"`);
                        tf.size = fs.statSync(tf.Location).size; // Update its file size
                    };
                } else if (fs.lstatSync(config.PathsToScan[f].Location).isDirectory()) {
                    // It's a directory, loop through all the .log (but not .log.*) files
                    fs.readdirSync(tf.Location).forEach(function(filename) {
                        if (path.extname(filename) == ".log") {
                            console.log(filename);
                        };
                    });

                } else {
                    console.warn(`[Warning] I'm unable to detect what "${config.PathsToScan[f].Location}" is. It may be a socket or symlink.`);
                };

            } else {
                console.warn(`[Warning] The file "${config.PathsToScan[f].Location}" does not exist!`);
            };
        };
    }, config.Client.ScanFrequency) // Wait the ScanFrequency value
};

ScanFiles(); // Run