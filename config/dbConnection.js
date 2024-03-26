const mysql = require("mysql");

module.exports = function(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "umbrella_officing",
        port: 3306
    });
}