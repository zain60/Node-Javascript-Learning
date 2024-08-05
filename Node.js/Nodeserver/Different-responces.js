// import http module

const http = require("node:http");


//  JSON responce
// const server = http.createServer((req,res)=>{

//     const hero = {
//         name:'KHAN',
//         identity:"804"
//     }
//     res.writeHead(200,{"content-type":"application/JSON"});
//     res.end(JSON.stringify({hero}))
// });



// HTML responce

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h1>Hello World</h1>")
});


server.listen(3000,()=>{
    console.log("serevr is running on PORT 3000")
});