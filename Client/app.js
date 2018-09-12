var fs = require('fs') // Nodes file system
var path = require('path') // For managing paths, ofcourse.

// Parse config file
var config = JSON.parse(fs.readFileSync('./Client/config.json', 'utf8'));
var scanArr = []; // Gets populated by init(); An array of all the files and their metadata that need checking on.

// Go round all the files and collect their file names, size, and other things we can add in
// into a single big array of files that need scanning. Then we can just iterate over that.
function Init() {
    console.log('Client Initializing...');

    for (var f = 0; f < config['PathsToScan'].length; f++) { // For every config entry
        if (fs.existsSync(config.PathsToScan[f].Location)) { // If the file or dir exists
            var tfd = config.PathsToScan[f] // This file or dir  (tf)
            if (fs.lstatSync(tfd.Location).isFile()) { // If it's a file we're looking at
                // Populate all its data and push it
                tfd.filename = path.basename(tfd.Location);
                tfd.size = fs.statSync(tfd.Location).size;
                scanArr.push(tfd);
            } else if (fs.lstatSync(tfd.Location).isDirectory()) { // Elif its a dir
                fs.readdirSync(tfd.Location).forEach(function(filename) { // for every item in dir
                    if (path.extname(filename) == ".log") { // If it's a .log and nothing but a .log file, append
                        // Populate all its data and push it
                        tfd.filename = filename;
                        tfd.Location = tfd.Location + filename;
                        tfd.size = fs.statSync(tfd.Location).size;
                        scanArr.push(tfd);
                    };
                });
            } else {
                console.warn(`[Warning] I'm unable to detect what "${config.PathsToScan[f].Location}" is. It may be a socket or symlink.`);
            };
        } else {
            console.warn(`[Warning] The file "${config.PathsToScan[f].Location}" does not exist!`);
        };
    };

    //Todo: For every file pushed to the array, check if they exist in the database, if so, populate metadataa such as how many lines the database holds compared to the file

    //Todo: check & launch webUI
    
    console.log('Client Initialized.');
    ScanFiles();
};

function ScanFiles() {
    setInterval(function() {
        // Iterate over each file
        for (var f = 0; f < scanArr.length; f++) {
            tf = scanArr[f]; // This File (tf)
            // If the byte size != the previously logged byte size for that item, read it.
            if (fs.statSync(tf.Location).size != tf.size) {
                tf.size = fs.statSync(tf.Location).size; // Update its file size
                console.log(`New file size detected on file "${tf.filename}"`);
            };
        };
    }, config.Client.ScanFrequency) // Wait the ScanFrequency value
    console.log(`Client is running.`);
};

Init(); // Run