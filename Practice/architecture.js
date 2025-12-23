const fs = require("fs");
const os = require("os");

// check thread pool size
console.log(os.cpus().length);

// console.log("1");
// // blocking...
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);
// console.log("2");

// console.log("1");
// //non-blocking...
// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//     console.log(result);
// });
// console.log("2");