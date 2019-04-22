/*
	Author: Popzi
	Description: Express API, serves dist files from Angular
*/
const path = require('path'); // Not ES6 ready yet. Nodemon no likey.
const express = require('express');
const fs = require("fs");
const app = new express();
module.exports = app;

// Serve Frontend
app.use(express.static('./WebDist'));
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'WebDist/index.html'));
});

// Pull in the API to be used by the frontend
fs.readdirSync(path.resolve(__dirname, 'API')).forEach(function(file) {
	require("./API/" + file)(app);
	console.log('Imported API endpoint:', file);
});

// Serve
app.listen(1338, () => {
	console.log('Server running on port 1338');
})
