const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class indexController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){
     var path1 = path.join(__dirname, '../views/index.ejs');
    var htmlContent = fs.readFileSync(path1, 'utf8');
    var htmlRenderized = ejs.render(htmlContent, {filename: 'index.ejs'});

        return htmlRenderized;
    }
}

module.exports = new indexController();
