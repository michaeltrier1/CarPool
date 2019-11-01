const ejs = require('ejs');
const fs = require('fs');
const path = require('path');


class poolController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(pageNumber){
        
var path1 = path.join(__dirname, '../views/post.ejs');
   var htmlContent = fs.readFileSync(path1, 'utf8');
    var htmlRenderized = ejs.render(htmlContent, {filename: 'post.ejs'});
   

        return htmlRenderized;
    }
}
module.exports = new poolController();
