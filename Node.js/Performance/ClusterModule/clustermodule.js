const cluster = require("node:cluster")
const http = require("node:http")

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`)
    cluster.fork();
    cluster.fork();

}
else{
    console.log(`worker ${process.pid} is running `)
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
            for(i=0;i<=20000000;i++){
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
}