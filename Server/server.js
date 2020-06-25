const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db.js');

app.use(cors());
app.get("/getDataFromUsers", (req, res, next) => {
    let sql = "select * from users";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            throw err;
        }
        res.json({
            "data": rows
        })
    });
});

app.get("/getDataFromUsersStatistic", (req, res, next) => {
    let sql = "select * from users_statistics";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            throw err;
        }
        res.json({
            "data": rows
        })
    });
});



app.listen(5000, () => {
    console.log('server listening on port 5000')
})
