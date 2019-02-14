/*
    Author: Ainsey
    Description: 
*/
var eventlog = require('windows-eventlog-reader');
var reader = eventlog.createReader ("Application");

function feedCb (event) {
    console.dir (event);
}
function doneCb (error) {
    if (error)
        console.error (error.toString ());
}
reader.readAll (1, feedCb, doneCb);
reader.tail (1, function (error, event) {
    if (error)
        console.error (error.toString ());
    else
        console.dir (event);
});