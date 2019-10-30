Class postModel {

    var connect = require('./src/core/database.js');
    
    Constructor(){ 
    }
    
    savePost(title, text, fromLocation, toLocation){
/*        var title=req.body.title;
        var text=req.body.text;
        var fromLoaction=req.body.fromLocation;
        var toLoaction=req.body.toLocation;
*/
        
        connect.connect(function(err){
            if (err) throw err;
            console.log("Connected");
            var sql = "INSERT INTO posts (title, text,fromLoaction, toLoaction) VALUES ('"+title+"', '"+text+"','"+fromLocation+"','"+toLocation+"')";  });
        
        con.query(sql, function(err,result){
            if (err) throw err;
            console.log("post succesfully inserted");
            res.end();
        });
    }
    
    loadPost(startNumber, endNumber){
        connect.connect(function(err){
            if (err) throw err;
            console.log("Connected");
            var sql = "Select INTO posts (title, text,fromLoaction, toLoaction) VALUES ('"+title+"', '"+text+"','"+fromLocation+"','"+toLocation+"')";  });
        
        con.query(sql, function(err,result){
            if (err) throw err;
            console.log("post succesfully inserted");
            res.end();
        });
    }
        
}
    


module.exports = new postModel();