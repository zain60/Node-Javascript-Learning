const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("order-pizza",(size)=>{
 console.log(`Order received! Baking pizza  of ${size}.size`)
})

emitter.emit("order-pizza","medium")
