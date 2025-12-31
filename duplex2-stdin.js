const {Duplex} = require("stream");

const duplex = new Duplex({

    write(chunk, encoding, callback){
        console.log("You typed: ", chunk.toString());
        callback();
    },
    read(size){
        this.push("Type something...\n");
        this.push(null);  //end read
    }
});
//read from keyboard - write to duplex
process.stdin.pipe(duplex);

//duplex output
duplex.pipe(process.stdout);