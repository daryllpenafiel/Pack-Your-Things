var connection = require("./connection.js");

var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM packinglist;", function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },
  /*insertOne: function(newThing,cb) {
    var thing = {"thing_name": newThing};

    connection.query('INSERT INTO packinglist SET ?', thing, function (err, result){
      if (err) throw err;
      cb(result);
    })
  },*/

  insertOne: function (thing_name, cb) {

    connection.query("INSERT INTO packinglist set ?", {
        thing_name: thing_name,
      }, function (err, result) {
        if (err) throw err;
        cb(result);
      })
    }
  /*, 
    updateOne: function(table, colName, inputValue, itemId, cb) {
      var queryString = "UPDATE ?? SET ?? = ?? WHERE id = ??";
  
      connection.query(queryString,[table, colName, inputValue, itemId], function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }*/
};

module.exports = orm;