// const fs = require('fs');
import fs from "fs"
// reading Sync way


console.log("First")
const file = fs.readFileSync("./file.txt");
console.log(file);

const fileReadale = fs.readFileSync("./file.txt","utf-8");
console.log(fileReadale);

console.log("Second")

// Reading Async way

fs.readFile("./file.txt","utf-8",(error,data)=>{
   if(error){
     console.log("Error while reading data",error)
   }
   else if (data){
    console.log("data readed",data)
   }
})
console.log("Third")



