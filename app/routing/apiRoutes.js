// server side api data route code
// encode as a function 

// var path = require('path');
var mysql = require("mysql");

var { Student }  = require("../public/assets/javascript/student.js");
var { StudentPool }  = require("../public/assets/javascript/studentPool.js");

var studentArr = [];



// const students = [ {name: 'Kyra', photo: 'no', answers: [1,2,3,4,5]},
//                  {name: 'Rory', photo: 'no', answers: [5,4,3,2,1]},
//                  {name: 'Sherman', photo: 'no', answers: [2,5,3,5,4]}, 
//                  {name: 'Milo', photo: 'no', answers: [1,2,3,5,4]},  
//                  {name: 'George', photo: 'no', answers: [5,2,1,5,4]}, 
//                  {name: 'Smokey', photo: 'no', answers: [2,3,1,3,1]},  
//                  {name: 'Russell', photo: 'no', answers: [5,1,1,3,1]}            
//                ];
// students.map(student => studentArr.push(new Student(student.name, student.photo, student.answers)));   
// console.log("HELLO:",studentArr);
 

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

  // vanilla get students route
  app.get("/api/students", function(req, res) {
    console.log("in apiRoutes. /api/students");
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
    // next step is to populate studentPool
    // from this query result and then serve then up in this
    // route result

    connection.query(query, function(err, result) {
      if (err) throw err;
      // console.log(result[0]);
      // console.log(result.length);
      // var students = []; // array to hold student objects
      // console.log(result);
      // var resultStudentPool = getStudents(result);
      // console.log(resultStudentPool);
      res.json(transformStudentSQLData(result));
      // res.json(result);
    });

    function transformStudentSQLData(result) {
      // console.log("in apiRoutes.transformStudentSQLData");
      // console.log(result[0]);
      var currName = '';
      var currPhoto = '';
      var currAnswers = [];
      var students = [];
      // var studentPool = '';
      result.map(row => {
        // console.log(row);
        if (row.question_nbr < 10) {
          if (row.question_nbr === 1) {
            currName = row.name;
            currPhoto = row.photo;
            currAnswers = [];
          };
          currAnswers.push(row.answer);
          // console.log(`name: ${currName} answers: ${currAnswers}`);
          // console.log(currAnswers);
        } else {  // 10th answer  - create student and push into array
          currAnswers.push(row.answer);
          // console.log(`TEN-name: ${currName} answers: ${currAnswers}`);
          // console.log(students);
          students.push(new Student(currName,currPhoto,currAnswers));
        };
      });
      // var studentPool = new StudentPool(students);
      // return studentPool;
      return students;
    };



  });

  // POST route
  // which will read the student database and populate studentPool
  // insert the current user into the database 
  // then it will call findMatch method on studentPool using the current user
  // finally it will return the 3 matches via the route result

  // post route
  app.post("/api/students", function(req, res) {
    console.log(req.body);
    // res.json(req.body);
        // var top3Match = [
        //    {
        //     name: 'Milo',
        //     photo: 'no',
        //     answers: [ 1, 2, 3, 5, 4 ],
        //     compatibility: 6
        //   },
        //    {
        //     name: 'Russell',
        //     photo: 'no',
        //     answers: [ 5, 1, 1, 3, 1 ],
        //     compatibility: 6
        //   },
        //    {
        //     name: 'Kyra',
        //     photo: 'no',
        //     answers: [ 1, 2, 3, 4, 5 ],
        //     compatibility: 8
        //   }
        // ];
     
    // res.json(top3Match);  


    var studentArr = [];
    const students = [ {name: 'Kyra', photo: 'no', answers: [1,2,3,4,5,5,2,1,5,4]},
                    {name: 'Rory', photo: 'no', answers: [5,4,3,2,1,5,2,1,5,4]},
                    {name: 'Sherman', photo: 'no', answers: [2,5,3,5,4,5,2,1,5,4]}, 
                    {name: 'Milo', photo: 'no', answers: [1,2,3,5,4,5,2,1,5,4]},  
                    {name: 'Myles', photo: 'no', answers: [5,1,1,3,1,5,2,1,5,4]},  
                    {name: 'George', photo: 'no', answers: [5,2,1,5,4,5,2,1,5,4]}, 
                    {name: 'Smokey', photo: 'no', answers: [2,3,1,3,1,5,2,1,5,4]},  
                    {name: 'Russell', photo: 'no', answers: [5,1,1,3,1,5,2,1,5,4]}            
                  ];
    students.map(student => studentArr.push(new Student(student.name, student.photo, student.answers)));               
    var studentPool = new StudentPool(studentArr);
    var match3 = studentPool.findMatches({name: 'Myles', photo: 'no', answers: [5,1,1,3,1,5,2,1,5,4]})
    res.json(match3);
  });
}