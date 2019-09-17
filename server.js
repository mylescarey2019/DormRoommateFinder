// server side code




// Import the function in htmlRoutes.js and immediately invoke it and pass in the express app object
// require('./routing/htmlRoutes.js')(app);
// require('./routing/apiRoutes.js')(app);


// Server 
// Requires
var express = require("express");
// var mysql = require("mysql");
var path = require("path");

// instansiate instance of express 
var app = express();

// Set the port of our application for use on Heroku and local 
var PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// static file direction
app.use(express.static('./app/public'));

// import route file functions and invoke
// note: Routes.js file have exported a function
// that expects app (instance of express) as a parameter
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// // mySQL connection to dormmates database
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "dormmates"
// });

// // initiate my sql connections `
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
