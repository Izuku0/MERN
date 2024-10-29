import asyncHandler from "../utils/asyncHandler.js";
import Service from "../models/service-model.js";

const services = asyncHandler(async (req, res) => {

    const response = await Service.find()
    res.status(201).json({msg:response})

    if(!response){
        throw new ApiError(400,"Something went wrong")
    }

})


export {services}