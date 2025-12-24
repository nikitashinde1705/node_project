const express = require('express');
const fs = require("fs");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//middleware - plugin
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    console.log("Hello from middlewere 1");
    req.myUsername = "nikita";
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 2", req.myUsername);
    next();
});

//Routes
app.get("/users", (req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

//REST API

//List all users JSON
app.get("/api/users", (req, res) => {
    return res.json(users);
});


app.post('/api/users', (req, res) => {
    //TODO : Create new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
        return res.json({status : "success", id: users.length});
    })
    
});

// for grouping use these
app
    .route("/api/users/:id")
    //Get the user with ID
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    //Edit the user with id
    .patch((req, res) => {
        return res.json({status : "pending"});
    })
    //Delete the user with id
    .delete((req, res) => {
        return res.json({status : "pending"});
    })





app.listen(PORT, () => console.log(`Server started at Port 8000`))