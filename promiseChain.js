function task1(){
    return Promise.resolve("Task 1 Done");
}

function task2(){
    return Promise.resolve("Task 2 Done");
}

task1()
.then(result => {
    console.log(result);
    return task2();
})
.then(result => {
    console.log(result);
})