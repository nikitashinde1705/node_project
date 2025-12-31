const fs = require("fs");

const zlib = require("zlib");

const gzip = zlib.createGunzip();

fs.createReadStream("input.txt.gz")
.pipe(gzip)
.pipe(fs.createWriteStream("input.txt"));

console.log("File Decompressed Successfully");