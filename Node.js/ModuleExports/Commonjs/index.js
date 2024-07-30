const helloworld = require('./Math');
console.log(helloworld)

const myModule = require('./Math');
myModule.greet();
myModule.farewell(); 


const { greet, farewell } = require('./Math');
greet(); 
farewell();


