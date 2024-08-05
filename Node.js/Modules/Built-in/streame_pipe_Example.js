const fs = require("fs")
const zlib = require("node:zlib")// for chining


const readableStream = fs.createReadStream("./file.txt"
,{encoding:"utf-8",highWaterMark:2});

const writeAbleStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data",(chunk)=>{
// console.log(chunk)
// writeAbleStream.write(chunk);
// });


// for pipes lets comment the readableStream.on method
readableStream.pipe(writeAbleStream);

//  for chining
const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz")); // ypou will see a zip file


