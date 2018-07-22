var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb) {
      var queryString = "SELECT * FROM "+ table + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result)
      });
    },
    insertOne: function(table, colName, inputValue, cb) {
      var queryString = "INSERT INTO " + table + " (??) VALUES (??)";
      console.log(queryString);
      connection.query(queryString, [table, colName, inputValue], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(table, colName, inputValue, itemId, cb) {
      var queryString = "UPDATE ?? SET ?? = ?? WHERE id = ??";
  
      connection.query(queryString,[table, colName, inputValue, itemId], function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;