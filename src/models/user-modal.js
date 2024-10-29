import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
)

// pre works as middleware,it runs before it is saved onto db
//secure with bcrypt
userSchema.pre('save',async function(next){
const user =this;
if(!user.isModified("password")){
     next();
}

try {
   
    const round =await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password,round)
    user.password = hash_password;
} catch (error) {
    next(error)
}
})


//jsonwebtoken
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),     //payload
            email:this.email,
            isadmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d"
        }
        
    )

    } catch (error) {
        console.error(error)
    }
}

const User = new mongoose.model("User",userSchema)

export default User;