const EventEmiter = require("events");

const emitter = new EventEmiter();


emitter.on("payment", () => {
    console.log("Payment Successful");
});


setTimeout(() => {
    emitter.emit("payment");
},3000);