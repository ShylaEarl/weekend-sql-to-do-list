const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// define an object array with dummy data

//router.get
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

//router.post
router.post('/', (req, res) => {
    console.log('req.body', req.body);

    let name = req.body.name;
    let task = req.body.task;
    let date = req.body.date;
    let completed = req.body.completed;

    let queryText = `INSERT INTO "tasks" ("name", "task", "date")
    VALUES('${name}', '${task}', '${date}');`;
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
    
});

//router.delete

//router.put

module.exports = router;