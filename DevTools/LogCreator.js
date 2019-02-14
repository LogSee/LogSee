/*
    Author: Ainsey, Popzi
    Description: Creates log files and fills them with random data. Use this in conjuction with client.config to test the client-server functionality
*/

var fs = require('fs');
var path = require('path');

///////////////////////////////// Settings ///////////////////////////////////////
var filename = 'sampleLog.log'  // Fixed file name
var randomFilename = false      // Use random file names?
var timeoutSeconds = 15         // How long between adding junk into files
var createDirs = true           // Creates a dir full of dirQuantity log files
var dirQuantity = 5             // Amount of log files to put into the dir
/////////////////////////////////////////////////////////////////////////////////

if (randomFilename) {
    var filename = Math.random().toString(36).substr(2, 5) + '.log';
};

var fe = path.extname(filename);      // File extension
var fn = path.basename(filename, fe); // File name

// Create a directory full of log files 
if (createDirs) {
    for (var i = 0; i < dirQuantity; i++) {
      randomID = Math.floor(Math.random() * (9000 - 1000)) + 1000;
        // Create directory to pop everything in
        if (!fs.existsSync(path.join(__dirname + '/' + fn + 's'))) {
          fs.mkdirSync(path.join(__dirname + '/' + fn + 's'));
        };
        // Fill it up with files
        if (fs.readdirSync(path.join(__dirname + '/' + fn + 's')).length < dirQuantity) {
            fs.open(path.join(__dirname + '/' + fn + 's' + '/' + fn + randomID + fe), 'w', function (err, file) {
                if (err) throw err;
                console.log(`Created file: ${fn + randomID + fe}`);
            });
        };
    };
};

// Create single log file
fs.open(path.join(__dirname + '/' + filename), 'w', function (err, file) {
    if (err) throw err;
    console.log(`Created file: ${filename}`);
});

// Fill all the files up with junk
function InsertJunk(){
    // Fille all the dir files up with junk
    if (createDirs) {
        fs.readdir(path.join(__dirname + '/' + fn + 's'), function(err, files) {
            files.forEach(function(file, index) {
                var RandomString = Math.random().toString(36).substr(2, 15);
                fs.appendFile(path.join(__dirname + '/' + fn + 's' + '/' + file), RandomString + '\r\n' , function (err) {
                    if (err) throw err;
                    console.log(`Inflated ${file}`);
                })
            });
        });
    };
    // Add stuff to the main file
    var RandomString = Math.random().toString(36).substr(2, 15);
    fs.appendFile(path.join(__dirname + '/' + filename), RandomString + '\r\n' , function (err) {
        if (err) throw err;
        console.log(`Inflated ${filename}`);
    });
}

setInterval(InsertJunk, timeoutSeconds * 1000);
