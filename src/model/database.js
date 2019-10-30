var exports = module.exports;

var mysql = require('pg');

var connect = mysql.createConnection({
    host:"balarama.db.elephantsql.com",
    user:"rqudjcey",
    password:"0XBP0dAZ7j39d5Gu3nYuC3xl95Rz-Hr0",
    database:"CarPool"
});

connect.connect(function(err){
    //if (err) throw err;
    console.log("Connected");
    var sql = "DELETE FROM users WHERE true";
    
    connect.query("DELETE FROM users WHERE true",function(err, result, fields){
        //if (err) throw err;
        console.log("query");
        var sql = "DELETE FROM users WHERE true";
    });
});




exports.connecton = connect;