const asyncHandler =  (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        console.log("Something went wrong in asyncHandler",error)
    }
}

export default asyncHandler