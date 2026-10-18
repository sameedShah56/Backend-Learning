import mongoose from "mongoose"
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("The db connected")
    } catch (error) {
        console.log("The error in db", error)
    }
}

export default connectDb