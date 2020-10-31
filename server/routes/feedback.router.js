const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/' , (req, res) => {
    console.log('get /feedback');
    pool.query('SELECT * from "feedback";').then((result) =>{
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get /feedback' , error);
        res.sendStatus(500);
    });
})

module.exports = router;