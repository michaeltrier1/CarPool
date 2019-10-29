class loginController {
    
    constructor(){
        
    }
    
    aMethod(data){
        return "A login method with data: "+JSON.stringify(data);
    }
}

module.exports = new loginController();