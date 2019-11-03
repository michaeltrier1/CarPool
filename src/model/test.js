let posts = require('./posts.js')
let users = require('./users.js')

//rename()
//getUsers()
saveUser("someOtherEmail")
//saveUser("otherEmail")
//saveUser("notEmail")
//savePost(14)
//savePost(14)
//savePost(17)
//savePost(19)
//getPost(0)
//getPost(1)
//getPost(2)
//getPost(2)


function getUsers(){
    users.getUsers(() => {
        console.log("callback reached")
    })
}

function saveUser(email){
    users.saveUser("dsa",email,"dwe",(success) => {
        console.log("callback reached")
    })
}

function savePost(userid){
    posts.savePost("A post title", "some nonsense text body", "her", "der", userid, (result) => {
        console.log(result)
    })
}

function getPost(startPost){
    console.log(startPost)
    posts.getPosts(startPost,3, (results) => {
        console.log("controller: "+JSON.stringify(results))
    })
}

function rename(){
    let path = require('path');
    let databaseCore = require(path.join(__dirname, '../core/database.js'));
    databaseCore.connect((client) => {
        let sqlString = "ALTER TABLE posts RENAME other To fromlocation;";
        //let sqlString = "DELETE FROM posts where true"
        console.log("SQL string: "+sqlString)
        client.query(sqlString,(err, res) =>{
            console.log("error: "+err)
            client.end();
        });
    });
}


