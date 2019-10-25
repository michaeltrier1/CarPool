var mysql = require('mysql');

var connect = mysql.createConnection({

  host:"balarama.db.elephantsql.com",
  user:"rqudjcey",
  password:"0XBP0dAZ7j39d5Gu3nYuC3xl95Rz-Hr0",
  
});

connect.connect(function(err){
  if (err) throw err;
  console.log("Connected");
});
