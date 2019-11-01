class poolController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(pageNumber){
        
        
var htmlContent = fs.readFileSync(__dirname + '../src/views/post.ejs', 'utf8');
    var htmlRenderized = ejs.render(htmlContent, {filename: 'post.ejs', posts: posts});
   

        return htmlRenderized;
    }
}
module.exports = new poolController();
