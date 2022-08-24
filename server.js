const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.Port || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Connect to database
const db =mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //your mysql password
        password:'7141',
        database:'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});
 //Default response for any other request (Not found)
 app.use((req, res) => {
    res.status(404).end();
 });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

