const http = require("http");
const url = require("url");
const { parse } = require('querystring');
const ejs = require('ejs');
const fs = require('fs');
/*
'Set-Cookie': 'myCookie={"id": "someID"}'

let cookiesd = req.headers.cookie;

if (cookiesd != undefined){
		let cookieBody = cookiesd.split("=");
		let jsonCookie = JSON.parse(cookieBody[1]);
		let id = jsonCookie.id;
}
*/

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");

    switch (fullPath[1]) {
        case "":
        case "index":
            controller = require("./src/controller/index.js");
            controller.index((htmlResult) => {
                response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                response.end(htmlResult);
            })
            break;
        case "post":  
            controller = require("./src/controller/post.js");
            controller.showPosts(fullPath[2], (htmlResult) => {
                response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                response.end(htmlResult);
            })
            break;
        case "login":
            controller = require("./src/controller/login.js");
            controller.index((htmlResult) => {
                response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                response.end(htmlResult);
            })
            break;
        case "pool":
            controller = require("./src/controller/pool.js");
            controller.showPosts(fullPath[2], (htmlResult) => {
                response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                response.end(htmlResult);
            })
            break;
         case "createUser":
            controller = require("./src/controller/createUser.js");
            controller.index((htmlResult) => {
                response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                response.end(htmlResult);
            })
            break;
         case "createPool":
            controller = require("./src/controller/createPool.js");
            controller.index((htmlResult) => {
                response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                response.end(htmlResult);
            })
            break;
        case "test":
            console.log("this is ze test url")
            response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});   
            response.end("this is ze test url");
            /*controller = require("./src/controller/login.js");
            controller.login2("DERPEMAIL","DERPPW",(htmlResult, success)=>{
                if (success){
                    response.writeHead(303, {'Location': '/post' ,"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                    response.end();
                } else {
                    response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});            
                    response.end(htmlResult);
                }
            });  */        
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
            response.end('Not found\n');
    }
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
            case "login":
                controller = require("./src/controller/login.js");
                controller.login(parsedMessage, (htmlResult, success)=>{
                    if (success){
                        response.writeHead(303, {'Location': '/post' ,"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                        response.end();
                    } else {
                        response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});            
                        response.end(htmlResult);
                    }
                });            
            break;
            case "createUser":
                controller = require("./src/controller/createUser.js");
                controller.createUser(parsedMessage, (success, htmlResult)=>{
                    if (success){
                        response.writeHead(303, {'Location': '/login' ,"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                        response.end();
                    } else {
                        response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});            
                        response.end(htmlResult);
                    }
                });
                break; 
            case "createPool":
                controller = require("./src/controller/createPool.js");
                controller.createUser(parsedMessage, (success, htmlResult)=>{
                    if (success){
                        response.writeHead(303, {'Location': '/login' ,"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});
                        response.end();
                    } else {
                        response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});            
                        response.end(htmlResult);
                    }
                });
                break; 
            case "post":
                controller = require("./src/controller/post.js");
                controller.searchPosts(parsedMessage, (htmlResult)=>{
                    response.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": '*'});            
                    response.end(htmlResult);
                });
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
