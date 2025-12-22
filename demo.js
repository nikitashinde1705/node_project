console.log("Welcome to Node JS");

console.log("Directory name: ", __dirname);
console.log("File Name: ", __filename);
console.log("Node Version: ", process.version);
console.log("Platform: ",process.platform);

const os = require("os");

console.log("OS Name: ", os.type());
console.log("Platform: ", os.platform());
console.log("Total Memory: ", os.totalmem());

