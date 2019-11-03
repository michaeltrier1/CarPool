const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class loginController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    index(callback){        
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        callback(viewRenderer.render('login'))
    }

    /*bMethod(data){
        let email = data.email;
        let pW = data.password;
    
        var path1 = path.join(__dirname, '../views/post.ejs');
        var htmlContent = fs.readFileSync(path1, 'utf8');
        var htmlRenderized = ejs.render(htmlContent, {filename: 'post.ejs'});

        return htmlRenderized;
    }*/
    
    login(data, callback){
        let email = data.email;
        let pW = data.password;
        
        var modelPath = path.join(__dirname, '../model/users.js');
        var model = require(modelPath);
        
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        
        let result = model.authUser(email, pW, (success) => {
            if (success) {
                var htmlRendered = viewRenderer.render('viewPools');
                callback(htmlRendered, true)
            } else {
                var htmlRendered = viewRenderer.render('login');
                callback(htmlRendered, false)
            }    
        });
    }
    
    login2(email, pW, callback){
        console.log("login2")
        //callback("derp", true)
        
        var modelPath = path.join(__dirname, '../model/users.js');
        var model = require(modelPath);
        
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        
        let result = model.authUser(email, pW, (success) => {
            if (success) {
                //var htmlRendered = viewRenderer.render('viewPools');
                callback("htmlRendered", true)
            } else {
                var htmlRendered = viewRenderer.render('login');
                callback(htmlRendered, false)
            }    
        });
        
    }
}

module.exports = new loginController();