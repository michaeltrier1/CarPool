var ejs = require('ejs');
var fs = require('fs');

var htmlContent = fs.readFileSync(__dirname + '/views/post.ejs', 'utf8');

var htmlRenderized = ejs.render(htmlContent, {filename: 'post.ejs', exampleRenderEjs: 'Hello World!'});

console.log(htmlRenderized);