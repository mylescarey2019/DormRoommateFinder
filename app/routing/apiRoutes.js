// server side api data route code
// encode as a function 

// var path = require('path');
var mysql = require("mysql");

// mySQL connection to dormmates database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "dormmates"
});

// initiate my sql connections `
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});




module.exports = function(app) {
  // routes

  app.get("/api/students", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    var query = "SELECT s.student_id \
	                     ,s.name \
                       ,s.photo \
                       ,a.survey_answer_id \
                       ,a.question_nbr \
                       ,a.answer \
                  FROM student AS s \
                  JOIN survey_answer AS a \
                    ON s.student_id = a.student_id \
              ORDER BY s.student_id \
                      ,a.survey_answer_id";

    // this is the raw SQL data 
    // next step is to build out the classes for student and studentPool
    // populate them from this query result and then serve then up in this
    // route result

    connection.query(query, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
}