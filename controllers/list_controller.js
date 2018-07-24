var express = require("express");

var router = express.Router();

var packing = require("../models/packing.js");

//GET ALL
router.get("/", function (req, res) {
  packing.selectAll(function (data) {
    var hbsObject = {
      packings: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


//CREATE
router.post("/api/list/", function (req, res) {
  packing.insertOne(req.body.thing_name, function () {
    res.redirect("/");
  });
});

//UPDATE
router.put("/api/list/:id", function (req, res) {

  packing.updateOne(req.params.id, function () {
    res.redirect("/");
    })
  });


//DELETE
router.delete("/api/list/:id", function (req, res) {

  packing.deleteOne(req.params.id, function () {
    res.redirect("/");
    })
  });

// Export routes for server.js to use.
module.exports = router;