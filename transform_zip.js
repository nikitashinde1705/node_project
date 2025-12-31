const fs = require("fs");

const zlib = require("zlib");

const gzip = zlib.createGzip();

fs.createReadStream("input.txt")
.pipe(gzip)
.pipe(fs.createWriteStream("input.txt.gz"));

console.log("File Comppressed Successfully");