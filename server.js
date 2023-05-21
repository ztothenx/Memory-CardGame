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
        'INSERT INTO gameusers(id_user, moves ) VALUES (?,?)',
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

app.put('/create', jsonParser, function (req, res, next) {
        connection.execute(
            'UPDATE gameusers SET moves=? WHERE id_user=?',
        [ req.body.moves, req.body.id_user],
            function (err, results, fields) {
            if (err) {
                res.json({ status: 'error', message: err });
                return;
            }
            res.json({ status: 'ok' ,fields});
            }
        );
    });

app.delete('/create', jsonParser, function (req, res, next) {
        connection.execute(
            'DELETE FROM gameusers WHERE id_user = ?',[req.body.id_user] ,(err, result) =>{
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            });
    });

app.get('/gameuser', function (req, res, next) {
    connection.query(
		'SELECT * FROM gameusers ORDER BY moves ASC',
		function(err, results, fields) {
			res.send(results)
		}
	)
});

app.listen(process.env.PORT || 3333)
