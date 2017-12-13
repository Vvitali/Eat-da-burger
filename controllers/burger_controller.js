var express = require("express");
var burger_model = require("../models/burger.js");

var events = require('events');
var emmiter = new events();
var burgerModel = require("../models/burger.js");

exports.home = function (request, response){

	console.log("Request: " + request.originalUrl);
	burgerModel.selectAll(function(error, results){
		if (error){
			throw error;
		}
		console.log("Cont: "+ results);
		response.render("index", {
			name: results
		});
	})
	
	console.log("Displayed");

}

exports.addOne = function(request, response){
	console.log("Put:"+ request.body);
}