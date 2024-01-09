const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@123",
    database: "dar_global_broker_portal",
});


export default mysqlConnection;
