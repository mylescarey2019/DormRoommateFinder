// server side api data route code
// encode as a function 

// var path = require('path');
var mysql = require("mysql");

var { Student }  = require("../public/assets/javascript/student.js");
var { StudentPool }  = require("../public/assets/javascript/studentPool.js");

var connection;
if(process.env.JAWSDB_URL) {  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //otherwise, we're going to use our local connection!  put your local db set stuff here
  //(and remember our best practice of using the dotenv package and a .env file ;)
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "",
    database: "dormmates"
  });
}

// initiate my sql connections `
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// helper function
function transformStudentSQLData(result) {
  // console.log("in apiRoutes.transformStudentSQLData");
  var currName = '';
  var currPhoto = '';
  var currAnswers = [];
  var students = [];
  result.map(row => {
    if (row.question_nbr < 10) {
      if (row.question_nbr === 1) {
        currName = row.name;
        currPhoto = row.photo;
        currAnswers = [];
      };
      currAnswers.push(row.answer);
    } else {  // 10th answer  - create student and push into array
      currAnswers.push(row.answer);
      students.push(new Student(currName,currPhoto,currAnswers));
    };
  });
  return students;
};

// If the main route is hit, then we initiate a SQL query to grab all students.
// All of the resulting records are stored in the variable "result."
var selectQuery = "SELECT s.student_id \
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


module.exports = function(app) {
  // routes

  //  get students route
  app.get("/api/students", function(req, res) {
    console.log("in apiRoutes. /api/students");

    connection.query(selectQuery, function(err, result) {
      if (err) throw err;
      res.json(transformStudentSQLData(result));
    });
  });

  // POST route
  // which will read the student database and populate studentPool
  // insert the current user into the database 
  // then it will call findMatch method on studentPool using the current user
  // finally it will return the 3 matches via the route result

  // post route
  app.post("/api/students", function(req, res) {
    var matchUser = new Student(req.body.name,req.body.photo,req.body.answers);
    console.log(matchUser);

    // upsert the match user into the database
    var selectStudentQuery =  "SELECT * \
                                 FROM student \
                                WHERE name = ?";

    // insert into student and survey answer
    var insertStudentQuery =  "INSERT \
                                 INTO student \
                               SELECT 0 \
                                     ,? \
                                     ,?";

    var insertAnswerQuery =  "INSERT \
                                INTO survey_answer \
                              SELECT 0 \
                                    ,? \
                                    ,? \
                                    ,?";

    // update student and survey answer    
    var updateStudentQuery =  "UPDATE student \
                                  SET photo = ? \
                                WHERE name = ?";

    var updateAnswerQuery =   "UPDATE survey_answer \
                                  SET answer = ? \
                                WHERE question_nbr = ? \
                                  AND student_id = (SELECT student_id \
                                                      FROM student \
                                                     WHERE name = ?)";

    // see if student exists first  
    // var studentExists = false;
    connection.query(selectStudentQuery, [matchUser.name], function(err, res) {
      if(err) throw err;
      if (res.length > 0) {
        // console.log(`FOUND USER: ${matchUser.name}`);
        updateStudent();
      } else {
        // console.log(`NOT FOUND USER: ${matchUser.name}`);
        insertStudent();
      };
    });


    // insert student if not exists
    function insertStudent() {
      connection.query(insertStudentQuery, [matchUser.name,matchUser.photo], function(err, res) {
        if(err) throw err;
        // console.log(res.insertId);
        var insertedStudentId = res.insertId;
        matchUser.answers.map((answer,question_nbr) => {
          connection.query(insertAnswerQuery, [insertedStudentId, question_nbr + 1, answer], function(err, res) {
            if(err) throw err;
          });  
        });
      });
    };

    // update student if exists
    function updateStudent() {
      connection.query(updateStudentQuery, [matchUser.photo, matchUser.name], function(err, res) {
        if(err) throw err;
        matchUser.answers.map((answer,question_nbr) => {
          connection.query(updateAnswerQuery, [answer, question_nbr + 1, matchUser.name], function(err, res) {
            if(err) throw err;
          });  
        });
      });
    };


    // retrieve all students and put in studentPool
    connection.query(selectQuery, function(err, result) {
      if (err) throw err;
      var studentPool = new StudentPool(transformStudentSQLData(result));
      var match3 = studentPool.findMatches(matchUser);
      res.json(match3);

    });
  });
}