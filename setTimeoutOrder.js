console.log("1");

setTimeout(() => {
    console.log("2");
},0);

console.log("3");

//setTimeout goes to event loop
//call stack finishes first
// then callback runs later
//non-blocking