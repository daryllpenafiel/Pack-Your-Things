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
  packing.insertOne(req.body.thing_name, function () {
    res.redirect("/");
  });
});

router.delete("/api/list/:id", function (req, res) {
  packing.updateOne(req.params.id, function () {
    res.redirect("/");
    })
  });

// Export routes for server.js to use.
module.exports = router;