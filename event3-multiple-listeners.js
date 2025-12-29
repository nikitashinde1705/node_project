const EventEmitter = require("events");

const emitter = new EventEmitter();

//first listener
emitter.on("order", () =>{
    console.log("Order received");
})


//second listener
emitter.on("order", () =>{
    console.log("Preparing food");
})

//third listener
emitter.on("order", () =>{
    console.log("Order ready");
});

emitter.emit("order");