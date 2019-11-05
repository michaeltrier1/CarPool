const ejs = require('ejs');
const fs = require('fs');
const pathCreator = require('path');

module.exports.render = (viewName, viewbag) => {
    var path = pathCreator.join(__dirname, './' + viewName + '.ejs');
    var htmlContent = fs.readFileSync(path, 'utf8');
    var htmlRenderized = ejs.render(htmlContent, { filename: viewName + '.ejs', viewbag: viewbag })
    return htmlRenderized;
}