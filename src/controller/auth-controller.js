import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user-modal.js";
import bcrypt from 'bcrypt';




const home = asyncHandler(async (req, res) => {
    res.send({message:"hello world"})


});
const register = asyncHandler(async (req, res) => {
    const {username,email,phone,password} = req.body
    
       if(!username || !email || !phone || !password){
        res.status(201).json({msg:"All fields are required"})
       }

       const userExist = await User.findOne({email,username})

       if(userExist){
       res.status(200).json({message:"User already exist"})
       }

     
      const userCreated =  await User.create({username,email,phone,password})
      if(!userCreated){
        res.status(400).json({msg:"Something went wrong while creating your account"})
      }

      res.status(201).json({msg:'User Created',token:await userCreated.generateToken(),userId:userCreated._id.toString()})
});

//-------------------LOGIN-----------------------//

const login = asyncHandler(async(req,res)=>{

  const {email,password} = req.body

  const userExist = await User.findOne({email})
  

  if(!userExist){
    return res.status(400).json({message:"Invalid Credientials"})
  }

  const user = await bcrypt.compare(password,userExist.password)

  if(user){
    res.status(201).json({msg:'Login Successful',token:await userExist.generateToken(),userId:userExist._id.toString()})
  
  }
  res.status(401).json({message:"Invalid email or password"})


})

//------------------------------Userdata----------------------------------//

const user = asyncHandler(async(req,res)=>{
    
   try {
    
     const userdata =req.user
     res.status(201).json({userdata})
   } catch (error) {
    console.log("Something went wrong in user route",error);
    
   }


})

export { home,register,login,user}