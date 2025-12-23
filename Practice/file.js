const fs = require("fs");

//sync
// fs.writeFileSync("./test.txt", "This is synchronous file");

//async
//fs.writeFile("./test.txt", "This is Async" , (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `Hey there`);

fs.cpSync("./test.txt", "./copy.txt");