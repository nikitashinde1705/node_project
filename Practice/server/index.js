const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");


// express
const app = express();

app.get('/',  (req,res) => {
    return res.send("Hello from home page")
})

app.get('/about',  (req,res) => {
    return res.send("Hello from About page " + req.query.name)
})

app.listen(8000, () => console.log("server Started"));

// const myServer = http.createServer(app);

// myServer.listen(8000,() => console.log("Server strted"));




// // 1
// // arrow fun responsible for incomming reques
// const myServer = http.createServer((req,res) => {
//     console.log("New Req Received");
//     res.end("Hello from Server");
// });

// myServer.listen(8000, () => console.log("Server started"));



// // 2 handling url
// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.url} New request received\n`;
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(myUrl.pathname) {
//             case "/":
//                 res.end("Home Page");
//                 break;
            
//                 case "/about":
//                     const username = myUrl.query.myname
//                     res.end(`Hi , ${username}`);
//                     break;
                
//                     case "/search":
//                         const search = myUrl.query.search_query;
//                         res.end("Here are your results for" + search)
//                 default:
//                     res.end("404 NOT found")

//         }
//     });
// });

// myServer.listen(8000, () => console.log("Server started"));

// // 3 http methods
// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
//     const myUrl = url.parse(req.url,true);
   
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(myUrl.pathname) {
//             case "/":
//                 if(req.method === "GET") res.end("Home Page");
//                 break;
            
//                 case "/about":
//                     const username = myUrl.query.myname
//                     res.end(`Hi , ${username}`);
//                     break;
                
//                 case "/signup":
//                     if(req.method === "GET") res.end("This is signup form");
//                     else if(req.method === "POST"){
//                         //db query
//                         res.end("Success");
//                     }
                
//                 case "/search":
//                     const search = myUrl.query.search_query;
//                     res.end("Here are your results for" + search)
//                 default:
//                     res.end("404 NOT found")

//         }
//     });
// });

// myServer.listen(8000, () => console.log("Server started"));


