const express = require("express")
//const mongoose = require('mongoose')
const connect = require("./configs/db")
const userController= require("./controller/user.controller")
const User = require("./models/user.model")
const {register,login,loggedUser,finduser} = require("./controller/auth.controller")
const authenticate=require("./middleware/authenticate.js")


const app = express();

app.use(express.json())
app.use("/users",userController)
app.post("/register", register)
app.post("/login",login)
app.get("/allUsers",finduser)
app.get("/loggedUser",authenticate,loggedUser)
// app.use("/products",productController)

app.listen(PROCESS.env.PORT||5000,async()=>{
   try {
    await connect()
    console.log("listening on port 5000")
   } catch (error) {
       console.log(error.message)
   }
})