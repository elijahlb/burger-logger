var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection({
    host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "bav343nip7vcaul2	",
    password: "dwak043s4kh524h4", 
    database: "c3ockqlggdt9focn"
});
} else  {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;