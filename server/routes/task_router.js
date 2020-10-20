const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js'); //const pool

// could add an object array with dummy data

//router.get is selecting all tasks from the DB and sending them to the DOM
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "tasks";`;
    pool.query(queryText)
        .then((result) => {
        res.send(result.rows);
        }).catch((error) => {
            console.log(`Error making query ${queryText}`, error);
            res.sendStatus(500);
        });  
    
});

//router.post is gathering input data from DOM and sending it to be stored in the DB
router.post('/', (req, res) => {
    console.log('req.body', req.body);

    let name = req.body.name;
    let task = req.body.task;
    let date = req.body.date;

    let queryText = `INSERT INTO "tasks" ("name", "task", "date")
    VALUES($1, $2, $3);`; //'${name}', '${task}', '${date}' add back in place of $1-$3 to unsanitize data
    pool.query(queryText, [name, task, date]).then((result) => { //take out array to unsanitize data
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
    
});

//router.delete will remove a list item from the DOM and DB
router.delete('/:idParam', (req, res) => { //:id or :idParam
    console.log('hello from delete', req.params.idParam);
    let taskId =req.params.idParam
    let queryText =`DELETE FROM "tasks" WHERE "id" = $1;`;
    pool.query(queryText, [taskId]).then((result) => {
        console.log('Success!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error making query ${queryText}`, error);
        res.sendStatus(500);
    });
    
});

//router.put
router.put('/completed/:idParam', (req, res) => {
    console.log('in put reqest', req.body.completed, req.params.idParam);

    let taskId = req.params.idParam;
    let finishedTask = req.body.completedStatus;

    //create SQL query
    let queryText = `UPDATE "tasks" SET "completed" = $1 WHERE "id" = $2;`;
   
    pool.query(queryText, [finishedTask, taskId]).then((result) => {
        console.log('result from put', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
    });
});

module.exports = router;