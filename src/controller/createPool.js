const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class createPoolController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    index(callback){
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        callback(viewRenderer.render('createPool'))
    }
    
    createPool(data, callback){
        let title = data.title;
        let text = data.description;
        let from = data.fromDestination;
        let to = data.toDestination;
        
        var modelPath = path.join(__dirname, '../model/posts.js');
        var model = require(modelPath);
        
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        
        let result = model.savePost(title, text, from, to, 14, (success) => {
            if (success) {
                callback(true)
            } else {
                var htmlRendered = viewRenderer.render('createPool');
                callback(false, htmlRendered)
            }    
        });
    }
    
}

module.exports = new createPoolController();
