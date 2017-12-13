var orm = require("../config/orm.js");

exports.selectAll = ()=>{
	connection.query('SELECT * FROM `burgers`', function (error, results) {
		console.log("Run: selectAll()");
		console.log(results[0]);

		return results[0];
	});
}
exports.insertOne = ()=>{
}
exports.iupdateOne = ()=>{
}
