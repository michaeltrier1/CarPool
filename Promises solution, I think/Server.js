const http = require("http");
const url = require("url");
const { parse } = require('querystring');
const ejs = require('ejs');
const fs = require('fs');

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");

    switch (fullPath[1]) {
        case "":
        case "index":
            controller = require("./src/controller/index.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "post":
            controller = require("./src/controller/post.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "login":
            controller = require("./src/controller/login.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "pool":
            controller = require("./src/controller/pool.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod(fullPath[2]));
            break;
         case "createUser":
            controller = require("./src/controller/createUser.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
         case "createPool":
            controller = require("./src/controller/createPool.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "test":
            controller = require("./src/controller/login.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            //someAsyncFunction(controller, response)
            
            
            controller.cMethod().then(function(result){ response.end("Browser promise: "+result)})
            
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
            response.end('Not found\n');
    }
}

async function someAsyncFunction(controller, response){
    let result = await controller.cMethod();
    console.log("server: "+result)
    response.end("Browser async function: "+ result);
}

dispatch.POST = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");
    let message = '';

    request.on('data', data =>{
        message += data.toString();
    })

    request.on('end', () =>{
        let parsedMessage;
        parsedMessage = parse(message)

        switch (fullPath[1]) {
            case "post":
                controller = require("./src/controller/post.js");
                response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
                response.end(controller.aMethod(parsedMessage));
                console.log(parsedMessage);
                break;
            case "login":
                controller = require("./src/controller/login.js");
                response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
                //response.writeHead(304, {'Location': '/pool' ,"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
                response.end(controller.aMethod(parsedMessage));
                break;
            case "createUser":
            controller = require("./src/controller/createUser.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break; 
              case "createPool":
            controller = require("./src/controller/createPool.js");
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
            console.log(parsedMessage);
            response.end(controller.aMethod());
            break; 
            default:
                response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
                response.end('Not found\n');
        }
    })
}


http.createServer((request, response) => {
    console.log(request.method, request.url);
    try { dispatch[request.method](request, response); }
    catch (err) {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end('Method not allowed\n');
        console.log(err)
    }
}).listen(8080);
