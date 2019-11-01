class userModel{



  saveUser(username, email, password){

    client.connect(function(err){

      console.log("Connected");
      client.query('INSERT INTO users(username, email, password)VALUES("derp","derpmail2","derpypw")',(err, res){
        console.log('inside query');
        console.log(res)
        client.end();
      });
    });

}
        
