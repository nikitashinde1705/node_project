// const fs = require("fs");

// //Create readable stream (20 bytes per chunk)
// const readStream = fs.createReadStream("input.txt", {
//     highWaterMark: 20,  //chunk size
//     encoding: "utf8"
// });

// console.log("Reading File in Chunks");

// //data event - chunk received
// readStream.on("data", (chunk) => {
//     console.log("Chunk Received");
//     console.log(chunk);
//     console.log("---------");
// });

// readStream.on("end",() => {
//     console.log("File Reading Completed");
// })

const buf = Buffer.from("Hello");

console.log(buf);

console.log(buf.toString());