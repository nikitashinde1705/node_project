const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type" : "text/plain"});
    res.write("Hello from node Server");
    res.end();
});

server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
})