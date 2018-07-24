var connection = require("./connection.js");

var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM packinglist;", function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },
  insertOne: function (thing_name, cb) {
    connection.query("INSERT INTO packinglist set ?", {
        thing_name: thing_name,
      }, function (err, result) {
        if (err) throw err;
        cb(result);
      })
    }, 
    updateOne: function(id, cb) {
      connection.query("UPDATE packinglist SET ? WHERE ?", [{packed: true},{id:id}], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    deleteOne: function(id, cb) {
      connection.query("DELETE from packinglist WHERE ?", [{id:id}], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    }
};

module.exports = orm;