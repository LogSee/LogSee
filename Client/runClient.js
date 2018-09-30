if (process.version[1] != "8") { // Version check
    console.log('[WARNING] - Not running Node v8!')
    process.exit();
};

var path = require('path');                     // For managing paths, ofcourse.
var fs = require('fs');                         // Nodes file system
var request = require('request');               // npm install request!
var zlib = require('zlib');                     // For compression

// Variables
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/config.json'), 'utf8'));
var filesArray = [];       // Gets populated by init(); An array of all the files and their metadata that need checking on.
var data = {};          // Gets populated by init(); File the client uses to store small bits of data locally.

// Grabs split up metadata such as file name, ext, size, location and returns as dict
function getFileMetadata(filepath) {
    return {
        ID: null,
        filename: path.basename(filepath),
        filepath: filepath,
        size: fs.statSync(filepath).size,
        lastLine: 0,
        fileData: null
    };
};

// Go round all the files and collect their file names, size, and other things we can add in
// into a single big array of files that need scanning. Then we can just iterate over that.
function Init(callback) {
    console.log('Client Initializing...');

    // Go through all the config files, resolve them (or not) and add to the filesArray array.
    for (var f = 0; f < config['PathsToScan'].length; f++) {                                            // For every config entry
        if (fs.existsSync(config.PathsToScan[f].Location)) {                                            // If the file or dir exists
            if (fs.lstatSync(config.PathsToScan[f].Location).isFile()) {                                // If it's a file we're looking at
                filesArray.push(getFileMetadata(config.PathsToScan[f].Location));                       // Populate and push
                console.log(`[Success] Found file ${config.PathsToScan[f].Location}`);
            } else if (fs.lstatSync(config.PathsToScan[f].Location).isDirectory()) {                    // Elif its a dir
                fs.readdirSync(config.PathsToScan[f].Location).forEach(function(filename) {             // for every item in dir
                    if (path.extname(filename) == ".log") {                                             // If it's a .log and nothing but a .log file
                        filesArray.push(getFileMetadata(config.PathsToScan[f].Location + filename));    // Populate and push
                        console.log(`[Success] Found file ${config.PathsToScan[f].Location}`);
                    };
                });
            } else {
                console.warn(`[Warning] I'm unable to detect what "${config.PathsToScan[f].Location}" is. It may be a socket or symlink.`);
            };
        } else {
            console.warn(`[Warning] The file "${config.PathsToScan[f].Location}" does not exist!`);
        };
    };

    // Check if we have a .data.json file to store little bits of client info, such as our unique key
    if (fs.existsSync(path.join(__dirname + '/.data.json'))) {                                          // If the .data.json file exists
        data = JSON.parse(fs.readFileSync(path.join(__dirname + '/.data.json'), 'utf8'));               // Read/Load it into the data varaible as json
    } else {
        UpdateData();                                                                                   // Else create the file (before the webui launches)
    };

    // Launch the webUI as a child if configured
    if (config.WebUI.Enabled) {
        require(__dirname + '/WebUI/launchWebUI.js');
    };

    // Create a quick n dirty config variable which concats the LogSee Server URI together (LSSURI (LogSee Server URI))
    config.LSSURI = `${config.Client.LogSee_Protocol}://${config.Client.LogSee_Host}:${config.Client.LogSee_Port}`;
    console.log('LSSURI Crafted:', config.LSSURI);

    console.log('Client Initialized.');
    callback(true);
};

// Keeps the data file up to date when changing the data variable
function UpdateData() {
    fs.writeFileSync(path.join(__dirname + '/.data.json'), JSON.stringify(data));
};

// Authenticates with server
function Authenticate(callback) {
    console.log('Authenticating...');

    ////////////////////////////////////////// Developer Note //////////////////////////////////////////////////////
    // LogSee_Key   = The authentication key generated by the admin via server dashboard
    // UniqueKey    = The server-generated key given to the client after successful authentication with LogSee_Key
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Check that the client WebUI config isn't using the default values
    if (config.WebUI.RequireAuth && (config.WebUI.AuthUser == "admin" || config.WebUI.AuthPass == "admin")) {
        console.warn('[Critical] - The WebUI credentials are still set as default. Please change them before running the client.');
        process.exit();
    };

    // Ask if our AuthKey matches that of the servers
    function makeAuthReq() {
        request.post({url: `${config.LSSURI}/api/authenticate`, json: {'AuthKey': config.Client.LogSee_Key, 'UniqueKey': data.UniqueKey}}, function(err, response, body) {
            if (response) {
                console.log('ServerAuth Response:', response.statusCode, body.Message);
                if (response.statusCode == 200) {
                    console.log('Client successfully authenticated.');
                    callback(true); // Continues to next step
                } else if (response.statusCode == 201) { // The server recognised we're a newly connecting client and has given us a unique key
                    data.UniqueKey = body.UniqueKey;
                    UpdateData();
                    setTimeout(function() {makeAuthReq();}, 30000); // Check again every 30s
                } else if (response.statusCode == 401) { // Awaiting approval
                    console.log('Waiting 30s to try again...');
                    setTimeout(function() {makeAuthReq();}, 30000); // Check again every 30s
                } else if (response.statusCode == 403) { // Denied. Go away!
                    process.exit();
                } else if (response.statusCode == 404) { // No unqiue key record was found, wipe our key and try again
                    data.UniqueKey = null;
                    UpdateData();
                    console.log('Server did not recognize us. UniqueKey wiped, attemping re-authentication.');
                    makeAuthReq();
                };
            } else if (err) {
                console.log('Could not contact the LogSee server:', err.message);
                setTimeout(function() {makeAuthReq();}, 30000) // Check again every 30s
            };
        });
    };
    makeAuthReq();
};

// Iterates over the configured files and checks for file changes, reports them.
function ScanFiles() {
    // Send all these files to the API to ensure they're in the DB, and get back data on any metadata of our files.
    request.post({url: `${config.LSSURI}/api/addfiles`, json: {"Data": filesArray, "UniqueKey": data.UniqueKey}}, function(err, response, body) {
        if (response) {
            if (response.statusCode == 200) {
                filesArray = body.Message;
            };
        };
    });

    // Setup file watchers for each file.
    for (let f = 0; f < filesArray.length; f++) { // Iterate over each file

        let fsWait = false;
        fs.watch(filesArray[f].filepath, {encoding: 'utf8'}, function(eventType, filename) {
            if (filename) {

                if (fsWait) return; // Limit the method to only return once when detected change (fs.watch() is a lil buggy) by ignoring it for 100ms after first event.
                fsWait = setTimeout(() => {fsWait = false;}, 300);

                if (eventType == "rename") {
                    // ohh BALLS! The file has been renamed, way to go silly user!
                    // Identify if the file has been renamed to something else (no longer watchable), or if it's been renamed back (watchable)
                    if (fs.existsSync(filesArray[f].filepath)) {
                        console.log(`[Warning] - Regained track of ${filename}`);
                        // Todo: Set notify message
                    } else {
                        console.log(`[Warning] - Lost track of ${filename} due to it being renamed, moved or deleted.`);
                        // Todo: Set notify message
                    };

                    // Todo: Notify user via something, prolly request server API to notify user.

                } else if (eventType == "change") {
                    console.log(`Modification on ${filesArray[f].filename} detected. Comparing to database...`);
                    filesArray[f].size = fs.statSync(filesArray[f].filepath).size, // Update our memory copy of the file

                    CompareFileToDB(filesArray[f])
                    .then(changes => {
                        if (changes) {
                            console.log(`Sending detected changes in ${filesArray[f].filename} to database.`);

                            // Read the data from the file via 'partial-memory-streaming' I guess? I just made that word.
                            streamFromLine(filesArray[f], filesArray[f].lastLine).then(memData => {
                                if (memData) {
                                    //Strigify and compress array json returned from readFromLine(), which contains the files data as a list for each line.
                                    let compressedFileData = JSON.stringify(memData);
                                    filesArray[f].fileData = zlib.deflateSync(compressedFileData).toString('base64');

                                    console.log('My byte size is approximately', JSON.stringify(filesArray[f]).length);

                                    //Send the entire file object over the database
                                    console.log(`Sending compressed file (${filesArray[f].filename}) data to server.`);
                                    request.post({url: `${config.LSSURI}/api/addseries`, json: {"Data": filesArray[f], "UniqueKey": data.UniqueKey}}, function(err, response, body) {
                                        if (response) {
                                            console.log(response.body);
                                        };
                                        if (err) {
                                            console.log(`[WARNING] ${err}`);
                                        };
                                    });
                                };
                            })
                        } else {
                            console.log('Database says we are in sync.');
                        }
                    });
                };
            };
        });
    };
    console.log(`Client is running.`);
};

// Compares a file object to the database and returns true if there are differences as a.
function CompareFileToDB(fileObj) {
    return new Promise(function(resolve, reject) {
        request.post({url: `${config.LSSURI}/api/getfile`, json: {"Data": fileObj, "UniqueKey": data.UniqueKey}}, function(err, response, body) {
            if (response.statusCode == 200) {
                //console.log('CompareToFile:', fileObj.size, body.Size, fileObj.lastLine, body.LastLine);
                if (body.Size != fileObj.size || body.LastLine != fileObj.lastLine) {
                    resolve(true);
                } else {
                    reject(false);
                }
            } else {
                console.log('[WARNING] - Got unexpected response code from server:', response.statusCode);
                // Todo: Make the request to the API point for handling errors
                let errData = {
                    "Severity": 'ANOMOLY',
                    "Message": `Failed to get a reponse(200) from central LogSee server when comparing a local file to the database when it was changed. Got response ${response.statusCode} instead.`,
                    "Traceback": null
                }
                request.post({url: `${config.LSSURI}/api/errorhandle`, json: {"Data": errData, "UniqueKey": data.UniqueKey}}, function(err, response, body) {
                    if (err || !response) {
                        throw `Issue sending alert to database, is the central LogSee server running? - ${errData.Message}`
                    }
                });
            }
        });
    }).catch(err => err);
};

// Opens and parses a file and returns the data from a specified line to the end.
function streamFromLine(fileObj, endNumber = 0, startNumber = 0, encoding = 'utf8') {
    return new Promise(function(resolve, reject) {
        const readStream = fs.createReadStream(fileObj.filepath);
        let chunkCounter = 0;
        let lineCounter = 0; // Counts each /n within the file over each chunk
        let sizeCounter = 0;
        let startLineFound = false;
        let memData = null;
        let chunkLinesInArray = null;

        console.log(`================= Reading file ${fileObj.name} from line ${endNumber} =================`);

        readStream.on('data', chunk => { // Read stream

            let chunkLinesInArray = chunk.toString(encoding).replace(/\r\n|\n\n|\r/g, '\n').split('\n');
            lineCounter += chunkLinesInArray.length;
            if ((chunk.length == 65536) && (chunkLinesInArray[chunkLinesInArray.length - 1].indexOf('\n') == -1)) { // If the last line does not contain an \n, that means it continues on into the next chunk, and so we ammend our counter.
                lineCounter--; // Subtract 1
            };
            console.log(`Reading Chunk ${chunkCounter} (${chunk.length}, ${chunkLinesInArray.length} lines), ${lineCounter} lines read in total`)

            if (lineCounter >= endNumber) {                         // The starting line is in this chunk
                if (!startLineFound) {                              // Try and look for the starting line within this chunk.
                    if (chunkCounter == 0) {                        // If we're the first chunk, dont bother using maths
                        startLineWithinChunk = endNumber - 1;       // Arrays start at 0. Not 1.
                    } else {                                        // If we are, we'll need to calculate where the line is due to not being in the first chunk.
                        console.log('Counted lines:', lineCounter);
                        startLineWithinChunk = chunkLinesInArray.length - (lineCounter - endNumber) - 1;
                    }
                    console.log(`Starting line located in chunk ${chunkCounter}, array index ${startLineWithinChunk}`)
                    chunkLinesInArray.splice(0, startLineWithinChunk);
                    startLineFound = true;
                };

                // If this is the last chunk, identify if the file is using trailing lines or not.
                if (chunk.length < 65536) { // Warning: may break on very rare edge-cases where the chunk == 65536 and is INFACT the last chunk.
                    if (chunkLinesInArray[chunkLinesInArray.length - 1] == "") { // If the last item is an empty trailing line, remove it and set the files lastLine value to the lineCounter val.
                        chunkLinesInArray.pop();
                    };
                };

                // Whatever we're left with is good. Store this to memory.
                if (!memData) {
                    memData = chunkLinesInArray;
                } else {
                    memData = [...memData, ...chunkLinesInArray] // Well as we all know back in ES5, array1.concat(array2) was WAAAYYYYY TO HARD to read, LITERALLY UNREADABLE. This new ES6 method though. OOFT.. PERFECTLY READABLE. MUCH IMPROVED. #YORO
                };
            };
            sizeCounter += chunk.length;
            chunkCounter++;
        }).on('end', function() {
            fileObj.lastLine = lineCounter;
            fileObj.size = sizeCounter;
            
            if (chunkLinesInArray) {
                chunkLinesInArray = null; // Erase from memory
            };

            if (memData && memData.length > 0) {    // If MemData, resolve it
                console.log('Sending Data:', memData);
                resolve(memData);
            } else {                                // If not, say excuse as to why this fired and reject
                if (endNumber > lineCounter) {
                    console.log(`[Warning] Could not read from line ${endNumber} because the file is only ${lineCounter} lines long. You may miss a line of data upon next file change.`);
                } else {
                    console.log('[Warning] A change must\'ve occured on a same line. No new line data was found.');
                }
                reject(false);
            };
        });
    }).catch(err => err);
};

// Lets the server know we're still alive every config.Client.PingInterval seconds if
function Pinger() {
    setInterval(function() {
        console.log('Ping');
        request.post({url: `${config.LSSURI}/api/pingpong`, json: {'UniqueKey': data.UniqueKey} });
    }, config.Client.PingInterval * 1000);
};

// Javascript is wierd. Todo: Maybe turn into promises. Ugh.
Init(function(Initialized) {
    if (Initialized) {
        Authenticate(function(Authorized) {
            if (Authorized) {
                Pinger();
                ScanFiles();
            };
        });
    };
});
