// http methods used
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer1 = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} :${req.url} New request received\n`;
    // const myUrl = url.parse(req.url, true);
    
    fs.appendFile("log1.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                // if (req.method === "GET")
                res.end("Home Page");
                break;
            
            case "/about":
                    // const username = myUrl.query.myname;
                    // res.end(`Hi , ${username}`);
                res.end("I am NIkita");
                break;
                
                // case "/signup":
                //     if(req.method === "GET") res.end("This is a signup form");
                //     else if (req.method === "POST") {
                //         // DB Query
                //         res.end("Success");
                //         break;
                //     }
                default:
                    res.end("404 not found");
                

        }
    })
})

myServer1.listen(8001, () => console.log("Server started"));