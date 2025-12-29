const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url == "/video"){
        res.writeHead(200, {
            "Content-Type" : "video/mp4"
        });

        const readStream = fs.createReadStream("sample.mp4", {
            highWaterMark: 64 * 1024
        });

        readStream.on("data", (chunk) => {
            console.log("Chunck Received..");
            console.log("Chunk Size", chunk.length, "bytes");
            console.log("is Buffer ?", Buffer.isBuffer(chunk));
            console.log("----------");
            
            res.write(chunk);
        });
        readStream.on("end", () => {
            console.log("Video Stream Completed");
            res.end();
        })
    }
    //HTML Page
    else{
        res.writeHead(200, {
            "content-Type" : "text/html"
        });
        res.end(`<h2> Video Streaming (Using Buffer) </h2>
            <video width="600" controls>
                <source src="/video" type="video/mp4">
            </video>`);
    }
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});