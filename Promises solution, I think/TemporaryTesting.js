serverFunction();

async function controllerFunction(){
    let users = require('./users.js');	
    let path = require('path');

    //users.getUsers();
    //users.getUsers();
    let result;
    try {
        result = await users.authUser("DERPEMAIL","DERPPW", async (success)=> {
            console.log("callback: "+success)
        })
    } catch (err) {
        console.log(err)
    }

    console.log("controller function: "+result)
    
    let returnValue = result;
    
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}


async function serverFunction(){
    console.log("server function: "+await controllerFunction())
}