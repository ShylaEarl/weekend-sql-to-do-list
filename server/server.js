//requires
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setup body parser - to translating request body into JSON
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() ); //may or may not need this
app.use(express.static('server/public'));

// Routes go here
const taskRouter = require('./routes/task_router.js');
app.use('/taskList', taskRouter);


// Start express
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});