var fs = require('fs');
var filename = Math.random().toString(36).substr(2, 5) + '.log';

fs.open(filename, 'w', function (err, file) {
  if (err) throw err;
  console.log('Created file. File name is: '+ filename);
});

function InsertJunk(){
  var RandomString = Math.random().toString(36).substr(2, 15);
  fs.appendFile(filename, RandomString + '\r\n' , function (err) {
  if (err) throw err;
  console.log('Added Log Line! Log name is: ' + filename);
})
}

setInterval(InsertJunk, 1500);
