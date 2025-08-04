import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js"; // Import the MongoDB URL from serverConfig
export default async function connectDB() {
    try{

        await mongoose.connect(MONGODB_URL)
        console.log("MongoDB connected successfully");
            
    } catch(error) {
   
    console.log("MongoDB connection failed");
    console.log(error);
}
}