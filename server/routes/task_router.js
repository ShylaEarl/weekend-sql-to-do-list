const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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
    VALUES('${name}', '${task}', '${date}');`;
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
    
});

//router.delete will remove a list item from the DOM and DB
router.delete('/:idParam', (req, res) => {
    console.log('hello from delete', req.params.idParam);
    
    let queryText =`DELETE FROM "tasks" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.idParam]).then((result) => {
        console.log('Success!', result);
        res.send(200);
    }).catch((error) => {
        console.log(`Error making query ${queryText}`, error);
        res.sendStatus(500);
    });
    
});

//router.put
router.put('/completed/:idParam', (req, res) => {
    console.log('in put reqest', req.body.completed, req.params.idParam);

    //create SQL query
    let queryText = '';
    if(req.body.completed === "up"){
        queryText = `UPDATE "tasks" SET "rank" = "rank"+1 WHERE "id" = ${req.params.idParam};`;
    } else {
        queryText = `UPDATE "songs" SET "rank" = "rank"-1 WHERE "id" = ${req.params.idParam};`;
    }
   
    pool.query(queryText).then((result) => {
        console.log('result from put', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
    });
});

module.exports = router;