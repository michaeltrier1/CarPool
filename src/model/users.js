class userModel{

  var connect = require('./src/core/database.js');


  saveUser(username, email, password){

    connect.connect(function(err){
      if (err) throw err;
      console.log("Connected");
      var sql = "INSERT INTO users (username, email,password) VALUES ('"+username+"', '"+email+"','"+password+"')";
    });

    con.query(sql, function(err,result){
        if (err) throw err;
        console.log("user succesfully inserted");
        res.end();
    });

    deleteUser(userid){
      connect.connect(function(err){
        if (err) throw err;
        console.log("Connected");
        var sql = "DELETE FROM users WHERE userid='?'";
      });

      con.query(sql, function(err,result){
          if (err) throw err;
          console.log("user succesfully deleted");
          res.end();
      });

    }
}
module.exports= new userModel();
