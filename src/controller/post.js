//let model = require('./src/model/postModel.js');
//let view = require('./src/view/database.js);

class postController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){

        return "A post method with data "+JSON.stringify(data);
    }
}

//module.exports = new postController(model, view);
module.exports = new postController(;