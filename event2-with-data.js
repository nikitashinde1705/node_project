const EventEmitter = require("events");

const emitter = new EventEmitter();

//listner accept data
emitter.on("welcome", (name) => {
    console.log("Welcome", name);
});

emitter.emit("welcome", "Nikita");