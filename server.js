var events = require('events');
var emmiter = new events();

var express = require("express");
var app = new require('express')();
var exphbs = require("express-handlebars");
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
var mysql = require('mysql');
var bodyparser = require('body-parser');

var orm = require("./config/orm.js")(emmiter);

orm.selectAll(emmiter);

emmiter.on("test", function(){
	console.log("azaza");
	console.log(__dirname+"/public/");
})

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/:par_name?", function(request, response){

	console.log("// %s", request.params.par_name);
	response.render("index", {
		name: request.params.par_name
	})
})
app.listen(8080);