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
}

module.exports = new loginController();
