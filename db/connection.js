const mysql = require('mysql2');

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
module.exports = db;