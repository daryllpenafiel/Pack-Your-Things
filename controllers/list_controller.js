var express = require("express");

var router = express.Router();

var packing = require("../models/packing.js");

router.get("/", function(req, res) {
    packing.selectAll(function(data) {
      var hbsObject = {
        lists: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

module.exports = router;