
function checkAge(age){
    return new Promise((resolve,reject) => {
        if(age >= 18){
            resolve("Access Allowed");
        } else {
            reject("Access Denied");
        }
    });
}

async function verify() {
    try{
        const result = await checkAge(10);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
verify();