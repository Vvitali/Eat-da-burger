var express = require("express");
var app = new require('express')();
var exphbs = require("express-handlebars");
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var controllers = require("./controllers/burger_controller.js");

app.get("/", controllers.home);
app.post("/addBurger", controllers.addOne);
app.post("/update", controllers.updateOne);

app.listen(process.env.PORT || 8080);