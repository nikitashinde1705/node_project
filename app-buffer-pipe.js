const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/video") {

        res.writeHead(200, {
            "Content-Type": "video/mp4"
        });

        const readStream = fs.createReadStream("sample.mp4", {
            highWaterMark: 64 * 1024
        });

        //  Using pipe instead of data/end
        readStream.pipe(res);

        

    } else {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h2> Video Streaming (Using Pipe) </h2>
            <video width="600" controls>
                <source src="/video" type="video/mp4">
            </video>
        `);
    }
});

server.listen(6000, () => {
    console.log("Server running at http://localhost:6000");
});
