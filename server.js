// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");


// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var planets = [
  { name: "H1", Gs: 1.00, temp: 17.6 },
  { name: "H7", Gs: 1.15, temp: 29.8 }
];


app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});
// Routes
app.get("/planet/:name", function(req, res) {
  for (var i = 0; i < planets.length; i++) {
    if (planets[i].name === req.params.name) {
      return res.render("planet", planets[i]);
    }
  }
});



// Initiate the listener.
app.listen(port);
