// server side code




// Import the function in htmlRoutes.js and immediately invoke it and pass in the express app object
require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);