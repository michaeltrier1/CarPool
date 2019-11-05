//let model = require('./src/model/postModel.js');
//let view = require('./src/view/database.js);
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class postController {

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
    
    searchPosts(data, callback){
        var modelPath = path.join(__dirname, '../model/posts.js');
        var model = require(modelPath);
        
        let from = data.fromDestination;
        let to = data.toDestination;
        
        model.searchPosts(from, to, () => {
            var viewPath = path.join(__dirname, '../views/viewRenderer.js');
            var viewRenderer = require(viewPath)
            var htmlRendered = viewRenderer.render('post', dataArray)
            callback(htmlRendered)   
        })
        
        
    }
}

module.exports = new postController();
