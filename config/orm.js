var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(table, colName, inputValue) {
      var queryString = "INSERT INTO ?? VALUES (??,??,??)";
      console.log(queryString);
      connection.query(queryString, [table, colName, inputValue], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(table, colName, inputValue, itemId) {
      var queryString =
        "UPDATE ?? SET ?? = ?? WHERE id = ??";
  
      connection.query(
        queryString,
        [table, colName, inputValue, itemId],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;