const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'idontknow',
    database: 'portfolio',
});

app.post('/contact', (request, response) => {
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const email = request.body.email;
    const subjectt = request.body.subjectt;
    const message = request.body.message;
    db.query(
        'INSERT INTO Contact (firstname, lastname, email, subjectt, message) VALUES (?, ?, ?, ?, ?)',
        [firstname, lastname, email, subjectt, message],
        (error, result) => {
            console.log(error);
        }
    );
});

 app.listen(3001, () => {
    console.log('Running server');
 });