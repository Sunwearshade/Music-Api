const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConection({
    host: Process.env.DB_HOST,
    user: Process.env.DB_USER,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_NAME,
});

connection.conect((err) => {
    if (err) {
        console.error('Error connecting to de database', err);
        return;
    }
    console.log('Connected to the database')
})

module.exports = connection;