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

//router.delete

//router.put

module.exports = router;