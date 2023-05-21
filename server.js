const express = require('express')
var cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.post('/create', jsonParser, function (req, res, next) {
    connection.execute(
        'INPUT your information(Username, moves ) VALUES (?,?)',
        [req.body.id_user, req.body.moves],
        function (err, results, fields) {
            if (err) {
                res.json({ status: 'error', message: err });
                return;
            }
            res.json({ status: 'ok' ,fields});
            }
        );
    });


app.get('/create', jsonParser, function (req, res, next) {
        connection.execute(
            'SELECT * FROM gameuser', (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            });
    });

app.put('/create', jsonParser, function (req, res, next) {
        connection.execute(
            'UPDATE your information(Username, moves ) VALUES (?,?)',
        [req.body.id_user, req.body.moves],
            function (err, results, fields) {
            if (err) {
                res.json({ status: 'error', message: err });
                return;
            }
            res.json({ status: 'ok' ,fields});
            }
        );
    });

app.listen(process.env.PORT || 3333)
