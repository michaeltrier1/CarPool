/* eslint-env es6, node */
/* eslint no-console: 0 */

const http = require("http");
const url = require("url");

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    let controller;
    switch (url.parse(request.url).pathname) {
        case "/post":            
            controller = require("./src/controller/post.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "/login":            
            controller = require("./src/controller/login.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "/pool":            
            controller = require("./src/controller/pool.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
            response.end('Not found\n');
    }
}

dispatch.PUT = (request, response) => {
     switch (url.parse(request.url).pathname) {
        case "/posts":
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end("something");
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
        console.log(err)
    }
}).listen(8080);
