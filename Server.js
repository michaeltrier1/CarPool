/* eslint-env es6, node */
/* eslint no-console: 0 */


const http = require("http");
const url = require("url");
const { parse } = require('querystring');
var express = require("express");
var app = express();
app.set('view engine', 'ejs');

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");
    console.log(request.parser);

    switch (fullPath[1]) {
        case "":
        case "index":
            controller = require("./src/controller/index.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            response.end(controller.aMethod());
            break;
        case "post":
            controller = require("./src/controller/post.js");
            response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
               var posts = [
                {title: "Hej", description: "yo"},
                {title: "Hej", description: "yo"},
                {title: "Hej", description: "yo"}
                            ]
            response.render("post.ejs",{posts:posts});
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

dispatch.POST = (request, response) => {
    let controller;
    let fullPath = url.parse(request.url).pathname.split("/");
    let message = '';

    request.on('data', data =>{
        message += data.toString();
    })

    request.on('end', dummyVariable =>{
        let parsedMessage;
        parsedMessage = parse(message)

        switch (fullPath[1]) {
            case "post":
                controller = require("./src/controller/post.js");
                response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
                response.end(controller.aMethod(parsedMessage));
                break;
            case "login":
                controller = require("./src/controller/login.js");
                response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
                //response.writeHead(304, {'Location': '/pool' ,"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
                response.end(controller.aMethod(parsedMessage));
                break;
            default:
                response.writeHead(404, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": '*'});
                response.end('Not found\n');
        }
    })
}
//Fjernes senere
app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", description: "Yeees"},
         {title: "Post 2", description: "Yeees2"},
         {title: "Post 3", description: "Yeees3"}
    ];
    res.render("post.ejs", {posts: posts});
    

 
    
})
//Fjernes senere
app.listen(3000,function(){
    console.log("Listening on portal 3000");
}); 

http.createServer((request, response) => {
    console.log(request.method, request.url);
    try { dispatch[request.method](request, response); }
    catch (err) {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end('Method not allowed\n');
        //console.log(err)
    }
}).listen(8080);
