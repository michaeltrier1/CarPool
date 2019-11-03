const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class loginController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){
        var path1 = path.join(__dirname, '../views/login.ejs');
        var htmlContent = fs.readFileSync(path1, 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'login.ejs'});

        return htmlRenderized;
    }

    bMethod(data){
        let email = data.email;
        let pW = data.password;
    
        var path1 = path.join(__dirname, '../views/post.ejs');
        var htmlContent = fs.readFileSync(path1, 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'post.ejs'});

        return htmlRenderized;
    }
    
    async cMethod(){
        var path1 = path.join(__dirname, '../model/users.js');
        console.log("controller: path to model "+path1)
        console.log(typeof path1);
        var model = require(path1);
        
        let result = await model.authUser("DERPEMAIL","DERPPW", async (success)=> {
            console.log("callback: "+success)
        });
        
        return new Promise((resolve, reject) => {
            resolve(result);
        });
        
    }
}

module.exports = new loginController();