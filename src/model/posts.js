var connect = require('./database1.js');

app.get('/',function(req, res){

res.sendFile(path.join(__dirname+'/posts.html'));
});
app.post('/submit',function(req,res){

  var title=req.body.title;
  var text=req.body.text;
  var fromLoaction=req.body.fromLoaction;
  var toLoaction=req.body.toLocation;


  connect.connect(function(err){
    if (err) throw err;
    console.log("Connected");
var sql = "INSERT INTO posts (title, text,fromLoaction, toLoaction) VALUES ('"+title+"', '"+text+"','"+fromLoaction+"','"+toLoaction+"')";  });
con.query(sql, function(err,result){
  if (err) throw err;
  console.log("post succesfully inserted");
  res.end();

});
});
