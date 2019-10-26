/* eslint-env es6, node */
/* eslint no-console: 0 */

const http = require("http");
const url = require("url");

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");
    
    switch (fullPath[1]) {
        case "post":            
            controller = require("./src/controller/post.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "login":            
            controller = require("./src/controller/login.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "pool":            
            controller = require("./src/controller/pool.js");            
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod(fullPath[2]));
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
            response.end('Not found\n');
    }
}

dispatch.PUT = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");
    
    switch (fullPath[1]) {
        case "post":            
            controller = require("./src/controller/post.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "login":            
            controller = require("./src/controller/login.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            //response.writeHead(304, {'Location': '/pool' ,"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
            response.end('Not found\n');
    }
}

http.createServer((request, response) => {
    console.log(request.method, request.url);
    try { dispatch[request.method](request, response); }
    catch (err) {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end('Method not allowed\n');
        //console.log(err)
    }
}).listen(8080);
