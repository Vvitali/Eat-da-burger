var connection = require("./connection.js");
exports.selectAll = (cb)=>{
	connection.query('SELECT * FROM `burgers`', function (error, results) {
		console.log(":Run: selectAll()");
		cb(error, results);
	});
};
exports.insertOne = (name, cb)=>{
	connection.query("INSERT INTO burgers (burger_name, devoured, date) VALUES (?, false, ?)", [name, Date()], function(error, results){
		console.log(":Run: insertOne(): "+Date());
		cb(error, results);
	});
}
exports.updateOne = (id, cb)=>{
	connection.query("UPDATE burgers SET devoured = true WHERE id=?", [id], function(error, results){
		console.log(":Run: updateOne(): "+Date());
		cb(error, results);
	});
}
