// import http module

const http = require("node:http");

const server = http.createServer((req,res)=>{


    res.writeHead(200,{"content-type":"txt/plane"});
    res.end("Hello World!")
});

server.listen(3000,()=>{
    console.log("serevr is running on PORT 3000")
});