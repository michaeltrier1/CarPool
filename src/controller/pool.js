class poolController {

    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    aMethod(pageNumber){
        return "A pool method, page number "+pageNumber;
    }
}

module.exports = new poolController();
