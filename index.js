import dns from "node:dns";
import express from "express"
import mongoose from "mongoose";
import User from "./models/user.model.js";
import "dotenv/config";

dns.setServers(["1.1.1.1", "8.8.8.8"]);



const app = express()
const port = 8000;
const mongoURL = process.env.MONGO_URL;
app.use(express.json())

app.post("/create",async (req,res)=>{
try {
    let {name,age,username,email}= req.body
    const newUser=await User.create({
        name,
        username,
        age,
        email
    })

    res.status(201).json({"message" :"User Created"})
} catch (error) {
    res.status(400).json({"message" : {error}})
}
})

app.get("/read", async(req,res)=>{
try {
    const users= await User.find()
    return res.status(200).json(users)
} catch (error) {

    return res.status(400).json(error)
    
}
})

//if i find username by specific username or anything
app.get("/read/:username", async(req,res)=>{
try {
    const users= await User.findOne({
        username:req.params.username
    })
    return res.status(200).json(users)
} catch (error) {

    return res.status(400).json(error)
    
}
})


const connectDb = async()=>{
    try {
        await mongoose.connect(mongoURL)
        console.log("The db connected")
    } catch (error) {
        console.log("The error in db", error)
    }
}





app.get('/' ,(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    connectDb()
    console.log(`The server is started at ${port}`)
})