module.exports = function(emmiter){
	console.log("mysql");
	var mysql = require("mysql");

	var events = require('events');
	var emmiter = new events.EventEmitter();
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'burger_db'
	});
	connection.connect(function(err){
		emmiter.emit("sql-connect");
		console.log("Connected:" + connection.threadId);
	});
	return connection;
};
