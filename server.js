var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
// Import routes and give the server access to them.
var router = require("./controllers/list_controller.js");

app.use('/',router);

app.listen(process.env.PORT || 3000, function() {
  console.log("App now listening at localhost:" + PORT);
});





