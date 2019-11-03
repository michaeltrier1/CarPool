const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class createUserController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    index(callback){
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        callback(viewRenderer.render('createUser'))
    }
    
    createUser(data, callback){
        let email = data.email;
        let password = data.password;
        let password_repeat = data.password_repeat;
        let username = data.username;
        
        var modelPath = path.join(__dirname, '../model/users.js');
        var model = require(modelPath);
        
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        
        if (password === password_repeat){
            let result = model.saveUser(username, email, password, (success) => {
                if (success) {
                    callback(true)
                } else {
                    var htmlRendered = viewRenderer.render('createUser');
                    callback(false, htmlRendered)
                }    
            });
        } else {
            var htmlRendered = viewRenderer.render('createUser');
                callback(false, htmlRendered)
        }
    }
}

module.exports = new createUserController();
