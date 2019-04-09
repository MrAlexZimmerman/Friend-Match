var express = require("express");
var htmlRouter = express.Router();
var path = require("path");

// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
htmlRouter.get('/', function (req, res) {
  res.sendFile("home.html", {root: path.join('./app/public')});
});

htmlRouter.get('/survey', function (req, res) {
  res.sendFile("survey.html", {root: path.join('./app/public')});
});

// If no matching route is found default to home
htmlRouter.get("*", function(req, res) {
  res.sendFile("home.html", {root: path.join('./app/public')});
});

module.exports = htmlRouter;

  