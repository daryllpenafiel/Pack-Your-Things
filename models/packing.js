var orm = require("../config/orm.js");

var list = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (thing_name, cb) {
        orm.insertOne(thing_name, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });
    },
    deleteOne: function (id, cb) {
        orm.deleteOne(id, function (res) {
            cb(res);
        });
    }
};

module.exports = list;

