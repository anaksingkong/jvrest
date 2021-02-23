const mysql = require('mysql');

// membuat koneksi kedatabase
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jvrestapi'
});

// mengecek koneksi kedatabase
connection.connect((error)=>{
    if (error) {
        console.log(error)
    } else {
        console.log("Database berhasil tersambung");
    }
});

module.exports= connection;