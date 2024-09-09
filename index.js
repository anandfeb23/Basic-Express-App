require("dotenv").config();
const express = require("express");


const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World, Welcome to the Backend");
});

app.get("/home", (req,res)=>{
    res.send("Welcome to the home page of my app")
})

app.get("/login", (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get("/chai", (req, res)=>{
    res.send("<h2>Welcome to chai aur code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log("server started successfully!!!");
});

// console.log("chai aur code");
