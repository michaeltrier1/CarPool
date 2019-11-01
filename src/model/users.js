class userModel{

    Constructor(){
    }
    
    saveUser(username, email, password){
        //console.log("entered saveUser")
        let path = require('path');
        let databaseCore = require(path.join(__dirname, '../core/database.js'));
        //console.log("before entering databaseCore connect")
        
        databaseCore.connect((client) => {
            //console.log("inside insertUser")
            let sqlString = "INSERT INTO users(username, email, password) VALUES('"+username+"','"+email+"','"+password+"')";
            console.log(sqlString)
            client.query(sqlString,(err, res) =>{
                //console.log('inside query');
                console.log(res)
                client.end();
            });
        });
    }   
    
    getUsers(){
        let databaseCore = require('./core/database.js');

        client.query('Select * from users',(err, res) =>{
            console.log('inside query');
            console.log(res)
            client.end()
        });
    }
    
    
}
         
module.exports = new userModel();