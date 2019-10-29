class loginController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(data){
        return "A login method with data: "+JSON.stringify(data);
    }
}

module.exports = new loginController();
