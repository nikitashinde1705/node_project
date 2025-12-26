function hello(name, callback){
    console.log("Hello " + name);
    callback();
}

function message(){
    console.log("Welcome");
}

hello("Rakesh", message);

//function pass as a argument
// Execute after main function(hello)