import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user-modal.js";
import Contact from "../models/contact-modal.js";
import Service from "../models/service-model.js";

const getAllUsers = asyncHandler(async (req, res) => {
    const user = await User.find({},{password:0})
    if(!user || user.length === 0){
        return res.status(400).json({message:"No user found"})
    }

    return res.status(201).json(user)
})


const getAllContacts = asyncHandler(async (req, res) => {
    const user = await Contact.find()

    if(!user){
        return res.status(400).json({message:"No Contacts found"})
    }

    return res.status(201).json(user)
})

const getAllServices = asyncHandler(async(req,res)=>{
    const user = await Service.find()

    if(!user){
        return res.status(400).json({message:"No Services found"})
    }

    return res.status(201).json(user)

})


    const deleteUserById = asyncHandler(async (req, res) => {

        const id = req.params.id
        const user = await User.deleteOne({_id:id})
        if(!user){
            return res.status(400).json({message:"No user found"})
        }
        res.status(201).json({message:"user deleted"})
    })

    const getUserById = asyncHandler(async (req, res) => {

        const id = req.params.id
        const user = await User.findOne({_id:id}).select("-password")
        if(!user){
            return res.status(400).json({message:"No user found"})
        }
       
       return  res.status(201).json(user)
    })

    const updateUserById = asyncHandler(async (req, res) => {
        const id = req.params.id
        const dataBody = req.body
        const updatedData = await User.updateOne({_id:id},
            {
                $set:dataBody
            }
        )
        return res.status(201).json({message:updatedData}) 
    })

    const deleteContactById = asyncHandler(async (req, res) => {

       try {
         const id = req.params.id
         const user = await Contact.deleteOne({_id:id})
         if(!user){
             return res.status(400).json({message:"No user found"})
         }
         res.status(201).json({message:"user deleted"})
       } catch (error) {
        next(error)
       }
    })

export {getAllUsers,getAllContacts,getAllServices,deleteUserById,getUserById,updateUserById,deleteContactById}