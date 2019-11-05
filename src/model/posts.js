class postModel {

    Constructor(){
    }

    savePost(title, text, from, to, userid, callback){
          let path = require('path');
          let databaseCore = require(path.join(__dirname, '../core/database.js'));

          databaseCore.connect((client) => {
              let sqlString = "INSERT INTO posts(title, text, fromLocation, toLocation, userid) VALUES('"+title+"','"+text+"','"+from+"','"+to+"',"+userid+")";
              client.query(sqlString,(err, res) =>{
                  client.end();
                  callback(res)
              });
          });        
    }

    getPosts(startPost, numberOfPosts, callback){          
        let path = require('path');
        let databaseCore = require(path.join(__dirname,'../core/database.js'));

        databaseCore.connect((client) => {
            client.query("SELECT * from posts ORDER BY timestamp DESC LIMIT "+numberOfPosts+" OFFSET "+startPost, (err, res) =>{
                let results = res.rows;
                let packagedResults = []
                results.forEach(function(row) {
                   let packagedRow = {
                       "title": row.title,
                       "text": row.text,
                       "from": row.fromlocation,
                       "to": row.tolocation,
                       "userid": row.userid,
                       "postid": row.postid
                   }
                   packagedResults.push(packagedRow)
                });
                
                client.end();
                callback(packagedResults)
            });
        })
    }
    
    
    
    searchPosts(from, to, callback){  
        let path = require('path');
        let databaseCore = require(path.join(__dirname,'../core/database.js'));

        databaseCore.connect((client) => {
            client.query("SELECT * from posts WHERE tolocation = '"+to+"' AND fromlocaton = '"+from+"' ORDER BY timestamp DESC", (err, res) =>{
                let results = res.rows;
                let packagedResults = []
                results.forEach(function(row) {
                   let packagedRow = {
                       "title": row.title,
                       "text": row.text,
                       "from": row.fromlocation,
                       "to": row.tolocation,
                       "userid": row.userid,
                       "postid": row.postid
                   }
                   packagedResults.push(packagedRow)
                });
                
                client.end();
                callback(packagedResults)
            });
        })
    }
}

module.exports = new postModel();