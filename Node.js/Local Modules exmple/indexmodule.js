//loaing the add module in this file
const sum = require('./addmodule')
console.log("THis is our main file ")

const add = sum(1,2);
const add1 = sum(3,7)

console.log({add,add1})

