class poolController {
    
    constructor(){
        
    }
    
    aMethod(pageNumber){
        return "A pool method, page number "+pageNumber;
    }
}

module.exports = new poolController();