console.log("mysql");
var mysql = require("mysql");
var connection = mysql.createConnection({
	host     : 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user     : 'pup3s1nhud56obne',
	password : 'y7m2cvcxezq6xwbz',
	database : 'evp1svvlcscmsqav'
});
connection.connect(function(err){
	console.log("Connected:" + connection.threadId);
});
module.exports = connection;

