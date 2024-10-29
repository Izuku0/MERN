const adminMiddleware = async(req,res,next)=>{


    try {
        
        const adminRole = req.user.isAdmin;
        // console.log(adminRole)
        if(!adminRole){
            return res.status(401).json({message:"Unauthorized User"})
        }
      

        next()
    } catch (error) {
        next(error)
    }
}

export default adminMiddleware;