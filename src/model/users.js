app.get('/',function(req, res){

res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/submit',function(req,res){

  var username=req.body.username;
  var email=req.body.email;
  var password=req.body.password;


  connect.connect(function(err){
    if (err) throw err;
    console.log("Connected");
var sql = "INSERT INTO users (username, email,password) VALUES ('"+username+"', '"+email+"','"+password+"')";  });
con.query(sql, function(err,result){
  if (err) throw err;
  console.log("user succesfully inserted");
  res.end();

});
};
