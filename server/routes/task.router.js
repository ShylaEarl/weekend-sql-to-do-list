const express = require('express');
const taskRouter = express.Router();

//DB connection
const pool = require('../modules/pool');

//GET
taskRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    });
});

//POST
taskRouter.post('/',  (req, res) => {
    let newTask = req.body;
    console.log(`Adding task`, newTask);
  
    let queryText = `INSERT INTO "tasks" ("name", "task", "date")
                     VALUES ($1, $2, $3);`;
    pool.query(queryText, [newTask.name, newTask.task, newTask.date])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new task`, error);
        res.sendStatus(500);
      });
});

//PUT

//DELETE
taskRouter.delete('/:id', (req, res) => {
    let reqID = req.params.id;
    console.log('Delete request id', reqID);
    
    let sqlText = 'DELETE FROM "tasks" WHERE "id"=$1;';
    pool.query(sqlText, [reqID])
    .then((result) => {
    console.log('Task Deleted');
    res.sendStatus(200);
    })
    .catch((error) => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500);
    });
});

module.exports = taskRouter;