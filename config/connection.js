console.log("mysql");
var mysql = require("mysql");
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'burger_db'
});
connection.connect(function(err){
	console.log("Connected:" + connection.threadId);
});
module.exports = connection;

