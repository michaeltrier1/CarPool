var connect = require('./src/core/database.js')


  var title=req.body.title;
  var text=req.body.text;
  var fromLoaction=req.body.fromLocation;
  var toLoaction=req.body.toLocation;


  connect.connect(function(err){
    if (err) throw err;
    console.log("Connected");
var sql = "INSERT INTO posts (title, text,fromLoaction, toLoaction) VALUES ('"+title+"', '"+text+"','"+fromLoaction+"','"+toLocation+"')";  });
con.query(sql, function(err,result){
  if (err) throw err;
  console.log("post succesfully inserted");
  res.end();

});
});
