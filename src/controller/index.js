class indexController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){

        return "A index method " + JSON.stringify(data);
    }
}

module.exports = new indexController();
