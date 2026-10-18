import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
     age:{
        type : Number,
        required : true
     },
      username:{
        type : String,
        required : true,
        unique : true
    },
     email:{
        type : String,
        required : true,
        unique : true
    }
},{timestamps: true})

// ab hum model banayenge jisme ye schema pass karwayenge

const User = mongoose.model("User",userSchema)
export default User;