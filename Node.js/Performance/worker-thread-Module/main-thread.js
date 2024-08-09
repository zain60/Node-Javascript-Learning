const http = require("node:http");
const {Worker} = require("node:worker_threads");

const server = http.createServer((req,res)=>{

    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("home page")
    }
    else if (req.url=="/about"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("about page")
    }
    else if(req.url=='/slow-page'){
      const worker  = new Worker("./worker-thread.js");
       worker.on("message",(j)=>{
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(`slow page ${j}`);
       });
    }
    else{
        res.writeHead(200,{"content-type":"text/plane"});
        res.end("page not found")
    }

});


server.listen(3000,()=>{
    console.log("serevr is running on PORT 3000")
});