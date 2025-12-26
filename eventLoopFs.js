const fs = require("fs");

console.log("Start");

//asynchronous File Read
fs.readFile("test.txt", "utf8", () => {
    console.log("File Read Completed");
});

console.log("End")