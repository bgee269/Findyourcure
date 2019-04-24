var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
<<<<<<< HEAD
=======

>>>>>>> 73b14fb2cb5c99a89e1cfff72324aaa680b9e8aa
  host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "dvi6ll60oa36r1r9",
  password: "dzbue5r1ffr917p3",
  database: "ogb3reih9ah9fyrn"
<<<<<<< HEAD
=======

>>>>>>> 73b14fb2cb5c99a89e1cfff72324aaa680b9e8aa
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;