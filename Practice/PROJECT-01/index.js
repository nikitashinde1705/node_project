const express = require('express');
const fs = require("fs");
const mongoose = require("mongoose");
// const users = require("./MOCK_DATA.json");
const { type } = require('os');

const app = express();
const PORT = 8000;

//Connection - with mongoose
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Mongo error",err));

// Schema
const userSchema = new mongoose.Schema({

    firstName : {
        type: String,
        required: true,
    },
    lastName: {
        type:  String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
  },
  {timestamps: true}
);

const User = mongoose.model('user', userSchema);
app.use(express.json());

//middleware - plugin
app.use(express.urlencoded({extended: false}))

//Routes
app.get("/users", async(req,res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

//REST API

//List all users JSON
app.get("/api/users", async(req, res) => {
   
    console.log(req.headers);
     //create our own header - responce time
     // always add X to custom headers
    res.setHeader("X-myname", "Nikita shinde"); //custom header

    const users = await User.find({});
    return res.json(users);
});

// for grouping use these
app
    .route("/api/users/:id")
    //Get the user with ID
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        return res.json(user);
    })
    //Edit the user with id
    .patch((req, res) => {
        return res.json({status : "pending"});
    })
    //Delete the user with id
    .delete((req, res) => {
        return res.json({status : "pending"});
    });

app.post('/api/users', async(req, res) => {
    //TODO : Create new user
    const body = req.body;
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({msg: "All fields are req..."});
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_Name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    // console.log("result", result);

    return res.status(201).json({msg: "successs"});

   
    
});

app.listen(PORT, () => console.log(`Server started at Port 8000`));


// //start 1
// const app = express();
// const PORT = 8000;

// //middleware - plugin
// app.use(express.urlencoded({extended: false}))

// app.use((req, res, next) => {
//     console.log("Hello from middlewere 1");
//     req.myUsername = "nikita";
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hello from middleware 2", req.myUsername);
//     next();
// });

// //Routes
// app.get("/users", (req,res) => {
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// })

// //REST API

// //List all users JSON
// app.get("/api/users", (req, res) => {
   
//     console.log(req.headers);
//      //create our own header - responce time
//      // always add X to custom headers
//     res.setHeader("X-myname", "Nikita shinde"); //custom header

//     return res.json(users);
// });


// app.post('/api/users', (req, res) => {
//     //TODO : Create new user
//     const body = req.body;
//     users.push({...body, id: users.length + 1});
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
//         //status code also added
//         return res.status(201).json({status : "success", id: users.length});
//     })
    
// });

// // for grouping use these
// app
//     .route("/api/users/:id")
//     //Get the user with ID
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         if(!user) return res.status(404).json({error: 'User Not Found'});
//         return res.json(user);
//     })
//     //Edit the user with id
//     .patch((req, res) => {
//         return res.json({status : "pending"});
//     })
//     //Delete the user with id
//     .delete((req, res) => {
//         return res.json({status : "pending"});
//     })

// app.listen(PORT, () => console.log(`Server started at Port 8000`));
// //end 1