class postController {

    constructor(model, view){
        this.model =  model;
        this.view = view;
    }

    aMethod(data){
        return "A post method with data "+JSON.stringify(data);
    }
}

module.exports = new postController();
