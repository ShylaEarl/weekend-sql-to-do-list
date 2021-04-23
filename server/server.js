//require an instance of express
const express = require('express');
//assign the express function to the variable app
const app = express();
//need body parser to package data being sent back and forth
const bodyParser = require('body-parser');
//PORT to listen on 
const PORT = process.env.PORT || 5000;

const taskRouter = require('./routes/task.router.js');

//express use body parser
app.use(bodyParser.urlencoded({extended: true}));
//gives express access to our static files
app.use(express.static('server/public'));

//ROUTES
app.use('/tasks', taskRouter)

//start listening for requests on a specific port (eg. 5000)
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});