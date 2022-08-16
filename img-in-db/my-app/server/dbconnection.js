const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: 'IMG'
})

module.exports = connection;