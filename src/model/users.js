class userModel{

    Constructor(){
    }

    saveUser(username, email, password, callback){
        let path = require('path');
        let databaseCore = require(path.join(__dirname, '../core/database.js'));
        let success = false;

        databaseCore.connect((client) => {
            let sqlString = "INSERT INTO users(username, email, password) VALUES('"+username+"','"+email+"','"+password+"')";
            client.query(sqlString,(err, res) => {
                if(err == null){
                    success = true
                }
                client.end();
                callback(success)
            });
        });
    }

    getUsers(callback){
        let path = require('path');
        let databaseCore = require(path.join(__dirname,'../core/database.js'));

        databaseCore.connect((client) => {
            client.query('Select * from users',(err, res) =>{
                client.end()
                callback("This is user, yes?")
            });
        });
    }

    authUser(email, password, callback){
        let path = require('path');
        let databaseCore = require(path.join(__dirname,'../core/database.js'));
        let success = false;
        
        databaseCore.connect((client) => {
            client.query("SELECT password from users where email='"+email+"'", (err, res) =>{
                if (res.rows.length > 0 && res.rows[0].password===password){
                    success = true;
                    client.end();
                    callback(success)
                } else {
                    client.end();
                    callback(success)
                }
            });
        })                        
    }
}

module.exports = new userModel();