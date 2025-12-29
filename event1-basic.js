const EventEmitter = require("events"); // bell system

const bell = new EventEmitter(); // install bell

bell.on("ring", () => { //when bell ring
    console.log("Door Opend");
});

bell.emit("ring");  //press bell