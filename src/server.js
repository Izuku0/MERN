import dotenv from 'dotenv'
import cors from 'cors'
import express from "express";
import authRoute from './routes/User-routes.js';
import contactRoute from './routes/contact-router.js';
import { connectDB } from './db/db.js';
import errorMiddleware from './middleware/error-middleware.js';
import serviceRoute from './routes/service-router.js';
import adminRoute from './routes/admin-router.js';

const app = express()

const corsOptions ={
    origin:'http://localhost:5173', 
    methods:"POST,GET,HEAD,PUT,PATCH,DELETE",
    credentials:true,            //access-control-allow-credentials:true
  
}
app.use(cors(corsOptions))
dotenv.config(
    {
        path:'./.env'
    }
)
app.use(express.json())

app.use("/api/auth/",authRoute)
app.use("/api/contact/",contactRoute)
app.use("/api/data/",serviceRoute)


app.use("/api/admin/",adminRoute)


app.use(errorMiddleware);

connectDB().then(()=>{

    app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT} `))

})

