// Note, this file is for the developers of LogSee more than anything, and shouldn't be needed by end users unless special modifications are made to the database schema.
// Example for MySQL/MariaDB `npm install -g mysql`
// Example for Postgres `npm install -g pg pg-hstore`
// Example for Sqlite3 `npm install -g sqlite`
// Example for MSSQL `npm install -g mssql`

var SequelizeAuto = require('sequelize-auto')
var fs = require('fs')
var path = require('path')
var config = JSON.parse(fs.readFileSync(path.join(__dirname + '/../config.json'), 'utf8'));

process.chdir(__dirname); // Pops all the models here

var auto = new SequelizeAuto(config.Server.SQL_DB, config.Server.SQL_User, config.Server.SQL_Pass, {
    dialect: 'mysql',
    host: config.Server.SQL_Host,
    port: config.Server.SQL_Port
});

auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
