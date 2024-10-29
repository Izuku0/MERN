import asyncHandler from "../utils/asyncHandler.js";
import Contact from "../models/contact-modal.js";

const contactForm = asyncHandler(async (req, res) => {
    const {username,email,message} = req.body;

    if(!username || !email || !message){
        res.status(201).json({msg:"All fields are required"})
    }

    const contactCreated =  await Contact.create({username,email,message})
    if(!contactCreated){
        throw new ApiError(400,"Something went wrong")
    }

    res.status(201).json({msg:"contact created"})
});

export {contactForm} 