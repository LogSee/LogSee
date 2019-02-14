/*
    Author: Ainsey
    Description: 
*/
const SyslogServer = require("syslog-server");
const server = new SyslogServer();
 
server.on("message", (value) => {
    //console.log(value.date);     // the date/time the message was received
    console.log(value.host);     // the IP address of the host that sent the message
    console.log(value.message);  // the syslog message
});
 
server.start();
