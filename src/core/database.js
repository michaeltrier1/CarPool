
var mysql = require('mysql');
var connection = mysql.createConnection({

  host:"balarama.db.elephantsql.com",
  user:"rqudjcey",
  password:"0XBP0dAZ7j39d5Gu3nYuC3xl95Rz-Hr0",

});

connection.connect(function(err){
  if (err) {
  console.log("Error connecting to database");
}else {
  console.log("Database is connected");
}
});

exports.connecton = connect;