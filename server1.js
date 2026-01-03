const http = require("http");

const fs = require("fs");

function readUsers(){

    return JSON.parse(fs.readFileSync("users.json", "utf-8"));

}

function writeUsers(users){

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
}

const server = http.createServer((req,res) => {
    const {method, url} = req;

    res.setHeader("Content-type", "application/json");

    //GET - All users
    if(method === "GET" && url === "/users"){
        const users = readUsers();
        res.end(JSON.stringify(users));
    }

    //GET - Users by id
    else if(method === "GET" && url.startsWith("/users/")){
        const id = parseInt(url.split("/")[2]);
        const users = readUsers();
        const user = users.find(u => u.id === id);

        if(!user){
            res.statusCode=404;
            return res.end(JSON.stringify({message: "User not found"}));

        }
        res.end(JSON.stringify(user));
    }

    //POST - ADD User( Auto ID)

    else if(method === "POST" && url === "/users"){
        let body ="";
        req.on("data", chunk => {
            body += chunk;
        });
        req.on("end", () => {
            const users = readUsers();
            const newUser = JSON.parse(body);

            //AUTO INCREMENTED ID
            const nextId = users.length > 0 ? 
                                Math.max(...users.map(u => u.id)) + 1
                                : 1;

            newUser.id = nextId;

            users.push(newUser);
            writeUsers(users);
            res.statusCode = 201;
            res.end(JSON.stringify(newUser));
        });
    }

    //PUT - Update the User data
    else if(method === "PUT" && url.startsWith("/users/")){
        const id = parseInt(url.split("/")[2]);
        let body = "";
        req.on("data", chunk => {
            body +=chunk;
        });
        req.on("end", () => {
            const users = readUsers();

            const index = users.findIndex(u => u.id === id);

            if(index === -1){
                res.statusCode = 404;
                return res.end(JSON.stringify({message:"User not found"}));

            }

            const updateData = JSON.parse(body);
            users[index] = {...users[index], ...updateData};

            writeUsers(users);
            res.end(JSON.stringify(users[index]));
        });
    }

    // DELETE - Remove users
    else if(method === "DELETE" && url.startsWith("/users/")){
        const id = parseInt(url.split("/")[2]);
        const users = readUsers();

        const filterUsers = users.filter(u => u.id !==id);

        if(users.length == filterUsers.length){
            res.statusCode = 404;
            return res.end(JSON.stringify({message: "User not found"}));
        }
        writeUsers(filterUsers);
        return res.end(JSON.stringify({message: "User removed successfully"}));
    }

    else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Route not found"}));
    }
});

//server call
server.listen(3000, () =>{
    console.log("Server Running at http://localhost:3000");
});