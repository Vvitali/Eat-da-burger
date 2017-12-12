var app = new require('express')();
var mysql = require('mysql');
var bodyparser = require('body-parser');


app.set("view engine", "hbs");

app.get("/:par_name?", function(request, response){

	console.log("// %s", request.params.par_name);
	response.render("./index.hbs", {
		name: request.params.par_name
	})
})

app.listen(8080);