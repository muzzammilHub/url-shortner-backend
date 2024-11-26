import mongoose from "mongoose";

const connectDB = async ()=>{
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`MONGO_DB connected : ${connectionInstance.connection.host}`)

        
    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
}

export default connectDB;