const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "learning"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("DB connection established!!");
});

module.exports = db