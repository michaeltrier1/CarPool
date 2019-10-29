class indexController {

    constructor(){

    }

    aMethod(data){
        return "A inedx method with data: "+JSON.stringify(data);
    }
}

module.exports = new indexController();
