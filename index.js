import dns from "node:dns";
import express from "express"

import "dotenv/config";
import connectDb from "./config/db.js";
import userRouter from "./Routes/user.routes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);



const app = express()
const port = process.env.PORT
app.use(express.json())

app.use("/",userRouter)

app.listen(port,()=>{
    connectDb()
    console.log(`The server is started at ${port}`)
})