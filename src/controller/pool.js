const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class poolController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    
    index(callback){
        showPosts(1, callback);
    }

    showPosts(pageNumber, callback){
        if (typeof pageNumber !== 'number'){
            pageNumber = 1;
        }
        
        let postsPerPage = 10;
        var modelPath = path.join(__dirname, '../model/posts.js');
        var model = require(modelPath);
        model.getPosts((pageNumber-1)*postsPerPage, postsPerPage, (dataArray) => {
            var viewPath = path.join(__dirname, '../views/viewRenderer.js');
            var viewRenderer = require(viewPath)
            var htmlRendered = viewRenderer.render('post', dataArray)
            callback(htmlRendered)     
        })
    }
}

module.exports = new poolController();