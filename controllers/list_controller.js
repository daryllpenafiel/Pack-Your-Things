var express = require("express");

var router = express.Router();

var packing = require("../models/packing.js");

router.get("/", function (req, res) {

  packing.selectAll(function (data) {
    var hbsObject = {
      packings: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/list", function (req, res) {
  packing.create([req.body.name], function (result) {
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/list/:id", function (req, res) {
  var taskId = "id = " + req.params.id;
  packing.update(req.body, taskId, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/list/:id", function (req, res) {
  var taskId = "id = " + req.params.id;

  packing.delete(taskId, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;