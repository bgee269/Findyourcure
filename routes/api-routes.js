//var connection = require("../config/connection.js.js");
const db = require("../models")


// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  // app.get("/api/all", function(req, res) {
  //   var dbQuery = "SELECT * FROM chirps";

  //   db.query(dbQuery, function(err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //   });
  // });

app.get("/api/all", function(req, res) {
  db.chirp.findAll({})
    .then(chirp => {res.json(chirp)})
})

  // Add a chirp
  app.post("/api/new", function(req, res) {
    const { author, body } = req.body;
    console.log("chirps Data:");
    console.log(req.body);

    db.chirp.create({
      author: author,
      body: body
    }).then(function(result) {
        console.log('success')
        res.json(result);
    }).catch(err => console.log(err))

    // var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

    // db.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
    //   if (err) throw err;
    //   console.log("chirps Successfully Saved!");
    //   res.end();
    // });
  });
};
