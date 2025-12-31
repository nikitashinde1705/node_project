const {Duplex} = require("stream");

const duplex = new Duplex({

    write(chunk, encoading, callback){
        console.log("Writing ", chunk.toString());
        callback();  //tell stream writing is done
    },
    //chunk incoming data (Buffer)
    //encoding data format
    //callback - for work completion
    read(size){
        this.push("Hello From Duplex Stream \n");
        this.push(null);  //end read
    }
});
//write data into duplex
//we can also write multiple lines
duplex.write("Hello its From Write");

//Read data from duplex
duplex.pipe(process.stdout);
