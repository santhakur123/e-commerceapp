import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs"

 export const signup=  async (req,res)=>{
    try{
  const {username,email,password}=req.body;

  console.log(req.body);
  // Check if the required fields are present
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Username, email, and password are required." });
  }
    const user=await User.findOne({email})
    if(user){
      return res.status(400).json({message:"User already exists"});
    }
    const hashPassword= await bcryptjs.hash(password, 10);
    const createUser=new User({
      username,
      email,
      password:hashPassword,
    });
     await createUser.save();
    res.status(201).json({message:"User created Successfylly",
      user:{id:createUser.id,
         username:createUser.username,
         email:createUser.email,

    },});
  }catch(error) {
    console.log( "error",error.message);
    res.status(500).json({message:"internal server error"})
  }

 };

 export const login= async (req,res)=>{
  try{
  const {email,password}=req.body;

  const loger =  await User.findOne({email})
  const isMatch = await bcryptjs.compare(password, loger.password)
  if(!loger || !isMatch){
    res.status(400).json({message:"Invalid Username"});
    
  } else{
    res.status(201).json({message:"Login Successfully", 
      loger: { 
        _id:loger._id,
        username:loger.username,
        email:loger.email

  },})
  }
 }catch(err){
  console.log(err.message)
  res.status(500).json({message:"internal server please"});
 }
};

  