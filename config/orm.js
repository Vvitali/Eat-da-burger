var connection = require("./connection.js");
exports.selectAll = (cb)=>{
	connection.query('SELECT * FROM `burgers`', function (error, results) {
		console.log("Run: selectAll()");
		console.log(results[0]);
		cb(error, results[0]);
	});
};
exports.insertOne = ()=>{
}
exports.iupdateOne = ()=>{
}
