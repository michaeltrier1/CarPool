class userModel{

    let databaseCore = require('../core/database.js');

    saveUser(username, email, password){
        
        /*let client = DatabaseCore.getConnection();
        
        client.connect(function(err){
          console.log("Connected");
            
         
        });*/
        
        DatabaseCore.connect(insertUser());
    }
    
    insertUser(){
        client.query('INSERT INTO users(username, email, password) VALUES("derp","derpmail2","derpypw")',(err, res){
            console.log('inside query');
            console.log(res)
        });
    }
}
        
