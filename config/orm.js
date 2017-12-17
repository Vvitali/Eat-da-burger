var connection = require("./connection.js");
exports.selectAll = (cb)=>{
	connection.query('SELECT * FROM `burgers`', function (error, results) {
		console.log("Run: selectAll()");
		console.log(results);
		cb(error, results);
	});
};
exports.insertOne = (name, cb)=>{
	connection.query("INSERT INTO burgers (burger_name, devoured, date) VALUES (?, false, ?)", [name, Date()], function(error, results){
		console.log("Run: insertOne()");
		cb(error, results);
	});
}
exports.updateOne = ()=>{
}
