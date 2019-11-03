class userModel{

    Constructor(){
    }

    saveUser(username, email, password, callback){
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

    getUsers(callback){
        let path = require('path');
        let databaseCore = require(path.join(__dirname,'../core/database.js'));

        databaseCore.connect((client) => {
            client.query('Select * from users',(err, res) =>{
                console.log('inside query');
                console.log(res.rows[0])
                client.end()
            });
        });
    }

    async authUser(email, password, callback){
        let path = require('path');
        let databaseCore = require(path.join(__dirname,'../core/database.js'));
        let success = false;
        
        return new Promise((resolve, reject) =>{
            try{ 
                databaseCore.connect(async (client) => {
                    client.query("SELECT password from users where email='"+email+"'", (err, res) =>{
                        if ((res.rows[0].password===password)){
                            success = true;
                            console.log("query: "+success)
                            callback(success)
                        }
                        client.end()
                        resolve(success);
                    });
                })
            } catch(err){
                console.log(err);
                reject(false)
            }
        })
                        
    }

}

module.exports = new userModel();