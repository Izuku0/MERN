import jwt from 'jsonwebtoken'
import User from '../models/user-modal.js'



const authMiddleware = async(req,res,next) =>{
const token =req.header("Authorization")

if(!token){
    res.status(401).json({msg:"Unauthorized HTTP,token not provided"})
}

const jwtToken = token.replace("Bearer","").trim()

try {
    const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)

    const userdata = await User.findOne({email:isVerified.email}).select("-password")
    req.user = userdata
    req.token=token;
    req.userID=userdata._id
    req.isAdmin=userdata.isAdmin
    
    
    next()
} catch (error) {
    console.log("auth middleware error",error);
    
}
}

export default authMiddleware





































































// import jwt from 'jsonwebtoken';
// import User from '../models/user-modal.js';


// const authMidlleware = async(req,res,next) =>{

//     const token = req.header('Authorization')

//     if(!token){
//         res.status(401).json({msg:"Unauthorized HTTP,token not provided"})
//     }
    
//     const jwtToken =token.replace("Bearer","").trim()
//     console.log('token from auth middleware',jwtToken);

//     try {
        
//         const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
//         console.log(isVerified);

//         const userdata = await User.findOne({email:isVerified.email}).select("-password")
//         console.log(userdata);
        
        
//         req.user =userdata;
//         req.token =token;
//         req.userID= userdata._id

        
//         next()
//     } catch (error) {
//         res.status(401).json({msg:"Unauthorized HTTP,token not provided"})
//     }


    


// }

// export default authMidlleware