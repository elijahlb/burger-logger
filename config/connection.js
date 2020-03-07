var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection({
    host: "	kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "qnith47w2rp59z6g",
    password: "zz65j4zfxvrtu9l0", 
    database: "w6tni7d3xkebh1a2"
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