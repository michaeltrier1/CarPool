const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class indexController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    index(callback){
        var viewPath = path.join(__dirname, '../views/viewRenderer.js');
        var viewRenderer = require(viewPath)
        let htmlRenderized = viewRenderer.render("index");
        callback(htmlRenderized);
    }
}

module.exports = new indexController();