const http = require("node:http");

const server = http.createServer((req,res)=>{

    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/plane"});
        res.end("home page")
    }
    else if (req.url=="/about"){
        res.writeHead(200,{"content-type":"text/plane"});
        res.end("about page")
    }
    else if(req.url=='/slow-page'){
        for(i=0;i<=8000000000000;i++){
        }
        res.writeHead(200,{"content-type":"text/plane"});
        res.end("slow page")
    }
    else{
        res.writeHead(200,{"content-type":"text/plane"});
        res.end("page not found")
    }

});


server.listen(3000,()=>{
    console.log("serevr is running on PORT 3000")
});