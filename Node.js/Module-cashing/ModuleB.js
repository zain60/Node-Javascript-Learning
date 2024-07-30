// const supeerhero = require("./ModuleA") 
// console.log(supeerhero.getname()) 
// supeerhero.setNAme("zain ul abdeen")
// console.log(supeerhero.getname()) 

//  To understad cahsing lets make another instance of class

// const newsupeerhero = require("./ModuleA")
// console.log(supeerhero.getname())  //zain ul abdeen     becuase it hase create inctance of cahsed module  wher name is changed

//  To remove it we need changes in module a , instaed of exporting instance of class export class itsel then issue will be resolved


const superher = require('./ModuleA')
const  batman = new superher("batman");
console.log(batman.getname()) 
batman.setNAme("batman-A")
console.log(batman.getname()) 



const superher1 = require('./ModuleA')
const  superman = new superher1("superman");
console.log(superman.getname()) 
superman.setNAme("superman-A")
console.log(superman.getname()) 



