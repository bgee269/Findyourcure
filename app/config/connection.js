
//var mysql = require("mysql");
//require('dotenv').config();
//var connection = mysql.createConnection("mysql://dvi6ll60oa36r1r9:dzbue5r1ffr917p3@bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ogb3reih9ah9fyrn");
var Sequelize = require("sequelize");

var sequelize = new Sequelize("sequelize_chirpy1", "root", "", {
  host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
// Set up our connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   hostname: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   username: "dvi6ll60oa36r1r9",
//   password: "dzbue5r1ffr917p3",
//   database: "ogb3reih9ah9fyrn"
// });

// Connect to the database
//connection.connect(function(err) {
  //if (err) {
    //console.error("error connecting: " + err.stack);
    //return;
  //}
  //console.log("connected as id " + connection.threadId);
//});

// Export connection
//module.exports = connection;
