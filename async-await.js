
function doTask(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Task finished")
        },2000)
    });
}

async function runTask(){
    const result = await doTask();
    console.log(result);
}

runTask();

//await waits for promise resolve or reject
//code looks synchronus
//still non-blocking