class postController {
    
    constructor(){
        
    }
    
    aMethod(data){
        return "A post method with data "+JSON.stringify(data);
    }
}

module.exports = new postController();