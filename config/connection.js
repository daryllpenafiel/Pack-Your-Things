var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b01c4dd70b4708",
  password: "93460106",
  database: "heroku_1bd905f7a7a4b09",
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
