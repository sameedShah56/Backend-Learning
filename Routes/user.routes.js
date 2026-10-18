import { Router } from "express"
import express from "express"
import { create, Home, readallUser, readoneUser, updateUser } from "../controller/user.conrtoller.js"


let userRouter=express()

userRouter.post("/create",create)

userRouter.get("/read", readallUser)

//if i find username by specific username or anything
userRouter.get("/read/:username",readoneUser)

///UPdate the user 
userRouter.put("/update/:id",updateUser)


userRouter.get('/' ,Home)
export default userRouter




