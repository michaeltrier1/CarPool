//let model = require('./src/model/postModel.js');
//let view = require('./src/view/database.js);
const ejs = require('ejs');
const fs = require('fs');

class postController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){
        var posts = [
        {title: "Post 1", description: "Yeees"},
         {title: "Post 2", description: "Yeees2"},
         {title: "Post 3", description: "Yeees3"}
    ];
    var htmlContent = fs.readFileSync(__dirname + '/post.ejs', 'utf8');
    var htmlRenderized = ejs.render(htmlContent, {filename: 'post.ejs', posts: posts});
   
  //  res.render("../src/views/post", {posts: posts}); 

        return htmlRenderized;
    }
}

//module.exports = new postController(model, view);
module.exports = new postController();