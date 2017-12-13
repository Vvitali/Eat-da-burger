var express = require("express");
var burger_model = require("../models/burger.js");

var events = require('events');
var emmiter = new events();
var orm = require("../config/orm.js")(emmiter);

exports.home = function (request, response){

	console.log("Request: " + request.originalUrl)
	response.render("index", {
		name: orm.selectAll()
	});
	console.log("Displayed");

}

exports.addOne = function(request, response){
	console.log("Put:"+ request.body);
	

}