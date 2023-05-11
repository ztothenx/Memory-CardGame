const express = require('express')
var cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/gameusers', (req, res) => {
	connection.query(
		'SELECT * FROM gameusers',
		function(err, results, fields) {
			res.send(results)
		}
	)
})

app.listen(process.env.PORT || 3000)