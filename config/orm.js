
module.exports = function(emmiter){
	var connection = require("./connection.js")(emmiter);
	var module = {
		selectAll : ()=>{
			connection.query('SELECT * FROM `burgers`', function (error, results) {
				console.log("selectAll");
				console.log(results);
				emmiter.emit("test")
				return results;
			});
		},
		insertOne : ()=>{
		},
		updateOne : ()=>{
		}
	}
	return	module;
}

