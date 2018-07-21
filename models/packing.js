var orm = require("../config/orm.js");

var list = {
    selectAll: function (cb) {
        orm.selectAll("packinglist", function (res) {
            cb(res);
        });
    },
    insertOne: function (table, colName, inputValue) {
        orm.insertOne("packinglist", table, colName, inputValue, function (res) {
            console.log(res);
        });
    },

    updateOne: function (table, colName, inputValue, itemId) {
        orm.updateOne("packinglist", table, colName, inputValue, itemId, function (res) {
            console.log(res);
        });
    }
};


module.exports = list;