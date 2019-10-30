Class postModel {

    var connect = require('./src/core/database.js');

    Constructor(){
    }

    savePost(title, text, fromLocation, toLocation){

        connect.connect(function(err){
            if (err) throw err;
            console.log("Connected");
            var sql = "INSERT INTO posts (title, text,fromLoaction, toLoaction) VALUES ('"+title+"', '"+text+"','"+fromLocation+"','"+toLocation+"')";  });

        con.query(sql, function(err,result){
            if (err) throw err;
            console.log("post succesfully inserted");
            res.end();
        });


    loadPost(postid, title, text, userid, fromLocation, toLocation, timestamp){
        connect.connect(function(err){
            if (err) throw err;
            console.log("Connected");
            var sql = "SELECT * FROM posts";

        con.query(sql, function(err,result){
            if (err) throw err;
            console.log("post succesfully loaded");
            res.end();
        });


    deletePost(postid){
        connect.connect(function(err){
            if (err) throw err;
            console.log("Connected");
            var sql = "DELETE FROM posts WHERE postid='?'";

        con.query(sql, function(err,result){
            if (err) throw err;
            console.log("post succesfully deleted");
            res.end();
        });
    }

}



module.exports = new postModel();
