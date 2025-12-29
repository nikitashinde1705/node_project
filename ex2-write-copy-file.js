const fs = require("fs");

const readStream = fs.createReadStream("input.txt");

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});

readStream.on("end", () => {
    console.log("File Copied Successfully..");
});