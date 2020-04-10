//creating use of mysql
var mysql = require("mysql");

//connectig to the mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Kilig2020",
  database: "burgers_db"
});

//throwing back either an error if could not connect or connected to which ID
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection file to be used elsewhere
module.exports = connection;
