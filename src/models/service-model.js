import mongoose,{Schema} from "mongoose";

const serviceSchema = new Schema({
    service:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    }
},{timestamps:true}
)

const Service = new mongoose.model("Service",serviceSchema)

export default Service;
