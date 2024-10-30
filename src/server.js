import dotenv from 'dotenv';
import cors from 'cors';
import express from "express";
import authRoute from './routes/User-routes.js';
import contactRoute from './routes/contact-router.js';
import { connectDB } from './db/db.js';
import errorMiddleware from './middleware/error-middleware.js';
import serviceRoute from './routes/service-router.js';
import adminRoute from './routes/admin-router.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const corsOptions = {
    origin: 'https://mern-1-jnnc.onrender.com',
    methods: "POST,GET,HEAD,PUT,PATCH,DELETE",
    credentials: true
};
app.use(cors(corsOptions));
dotenv.config({ path: './.env' });
app.use(express.json());

// Set up __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/auth/", authRoute);
app.use("/api/contact/", contactRoute);
app.use("/api/data/", serviceRoute);
app.use("/api/admin/", adminRoute);

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all route to send index.html for client-side routing
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
});
