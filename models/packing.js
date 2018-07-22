var orm = require("../config/orm.js");

var list = {
    selectAll: function (cb) {
        orm.selectAll("packinglist", function (res) {
            cb(res);
        });
    },
    insertOne: function (colName, inputValue,cb) {
        orm.insertOne("packinglist", colName, inputValue, function (res) {
            cb(res);
        });
    },
    updateOne: function (condition, cb) {
        orm.updateOne("packinglist", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = list;