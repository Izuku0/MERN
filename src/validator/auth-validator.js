import {z} from 'zod';


const loginSchema = z.object({
    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"name must be atleast 3 character"})
    .max(255,{message:"Email must not be more than 255 characters"}),
 
    password:z
    .string({required_error:"Password is Required"})
    .min(7,{message:"password must be atleast 7 character"})
    .max(255,{message:"password must not exceed 255 characters"})

})
//creating object schema
const signupSchema =  loginSchema.extend({
    username:z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"name must be atleast 3 character"})
    .max(255,{message:"Name must not be more than 255 charaters"}),

  
    
    phone:z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10,{message:"phone must be atleast 10 Numbers"})
    .max(12,{message:"Phone must not exceed 12 Numbers"}),

    
})

export {signupSchema,loginSchema};