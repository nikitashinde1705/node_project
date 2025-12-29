const fs = require("fs");

const readStream = fs.createReadStream("input1.txt");
const writeStream = fs.createWriteStream("output1.txt");

readStream.pipe(writeStream);

console.log("File Copied Using Pipe");