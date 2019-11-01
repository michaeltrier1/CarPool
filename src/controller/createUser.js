const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

class createUserController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){
     var path1 = path.join(__dirname, '../views/createUser.ejs');
    var htmlContent = fs.readFileSync(path1, 'utf8');
    var htmlRenderized = ejs.render(htmlContent, {filename: 'createUser.ejs'});

        return htmlRenderized;
    }
}

module.exports = new createUserController();
