module.exports = function(emmiter){
	var connection = require("./connection.js")(emmiter);
	var module = {
		selectAll : (cb)=>{
			connection.query('SELECT * FROM `burgers`', function (error, results) {
				console.log("Run: selectAll()");
				console.log(results[0]);

				return results[0];
			});
		},
		insertOne : ()=>{
		},
		updateOne : ()=>{
		}
	}
	return	module;
}