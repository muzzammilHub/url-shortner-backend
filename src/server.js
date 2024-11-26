import dotenv from "dotenv";

dotenv.config()

import express from "express";
import connectDB from "./config/index.js";
import urlRoute from "./route/url.js"

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());

// Routes
app.use('/', urlRoute);


// connectdb and Start server
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(`MongoDB connection failed !!! ${err}`)
})