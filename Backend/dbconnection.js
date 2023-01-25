const mysql = require('mysql2');

const dbconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'simpledb',
    port:3306
});

module.exports = dbconnection;