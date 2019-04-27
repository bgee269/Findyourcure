// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
//var sequelize = require("../config/connection.js.js");

// Creates a "Chirp" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Chirp = sequelize.define("chirp", {
    author: Sequelize.STRING,
    body: Sequelize.STRING
  }, {
    timestamp: false,
    // createAt: {
    //   field: "beginTime",
    //   defaultValue: sequelize.literal("Now()")
    // }

  });
  return Chirp
};

// Syncs with DB
//Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
// module.exports = Chirp;