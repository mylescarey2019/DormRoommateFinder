// server side html route code

// server side api data route code
// encode as a function 

var path = require('path');

module.exports = function(app) {
  // routes

  // survey route
  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  });

  // catch all home route
  app.use(function(req, res){
    res.sendFile(path.join(__dirname, '../public/home.html'))
  });
};