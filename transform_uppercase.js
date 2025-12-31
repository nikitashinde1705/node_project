const {Transform} = require("stream");

//create transform stream
const uppercaseStream = new Transform({
    transform(chunk, encoding, callback){
        const result = chunk.toString().toUpperCase();
        callback(null, result);
    }
});
process.stdin
    .pipe(uppercaseStream)
    .pipe(process.stdout);