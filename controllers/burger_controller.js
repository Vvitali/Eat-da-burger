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
		response.render("index", {
			name: results
		});
	})
	console.log("Displayed");
}

exports.addOne = function(request, response){
	if (!request.body) return response.sendStatus(400);
	console.log("Put:"+ request.body.name);
	burgerModel.insertOne(request.body.name, function(error, results){
		if(error){
			throw error;
		}
		response.send({
			name: request.body.name
		});
	})
}

exports.updateOne = function(request, response){
	if (!request.body) return response.sendStatus(400);
	console.log("Update:"+ request.body.id);
	burgerModel.updateOne(request.body.id, function(error, results){
		if(error){
			throw error;
		}
		response.send({
			id: request.body.id
		});
	});
}