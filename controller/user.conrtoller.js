import User from "../models/user.model.js";
export const create =async (req,res)=>{
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
}

export const readallUser=async(req,res)=>{
try {
    const users= await User.find()
    return res.status(200).json(users)
} catch (error) {

    return res.status(400).json(error)
    
}
}

export const readoneUser=async(req,res)=>{
try {
    const users= await User.findOne({
        username:req.params.username
    })
    return res.status(200).json(users)
} catch (error) {

    return res.status(400).json(error)
    
}
}



export const updateUser=async (req, res) => {
    try {
        let { name } = req.body;
        let id = req.params.id;

        let user = await User.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );

        return res.status(200).json(user);

    } catch (error) {
        return res.status(400).json(error);
    }
}

export const Home=(req,res)=>{
    res.send("hello")
}