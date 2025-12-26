const { error } = require("console");

//promise handles async results
const task = new Promise((resolve,reject) => {
    let success = true;
    if(success){
        resolve("Task Completed");
    }
    else{
        reject("Task failed");
    }
});

task
.then(result => console.log(result))
.catch(error => console.log(error))
