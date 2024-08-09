const fs = require("fs")
// // Example for microsTaskQueu


// // for nextTick queu
// console.log("Executed 1st")
// process.nextTick(()=>console.log("Executed Third"))
// console.log("Executed 2nd")

// // for promise Queu
// console.log("Executed 1st")
// Promise.resolve().then(()=>console.log("Executed 4th"))
// process.nextTick(()=>console.log("Executed Third"))
// console.log("Executed 2nd")
// //  ALl task in nextTick queu resolved first then in promise QUeu reseolved



// // Exmple for TimeQueu
// console.log("Executed 1st")
// setTimeout(()=>{console.log("Executed 1st Timeout")},2)
// setTimeout(()=>{console.log("Executed 2nd Timeout")},2)

// Promise.resolve().then(()=>console.log("Executed 4th"))
// process.nextTick(()=>console.log("Executed Third"))
// console.log("Executed 2nd")


// Exmple for microtaskQueu, timerqueu and i/o queu
console.log("Executed 1st")
fs.readFile(__dirname,()=>{
    console.log("Executed file reading method ")
})

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close',()=>{
    console.log("readable stream closed is called")
});

setTimeout(()=>{console.log("Executed 1st Timeout")},2)
setTimeout(()=>{console.log("Executed 2nd Timeout")},2)

Promise.resolve().then(()=>console.log("Executed 4th"))
process.nextTick(()=>console.log("Executed Third"));
setImmediate(()=>{
    console.log("setImmediate  executed")
})
console.log("Executed 2nd")
