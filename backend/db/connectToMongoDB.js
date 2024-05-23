import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.mongodb_url);
        console.log("connected to MongoDB");
    }
    catch(err){
        console.log("error connecting to MongoDB", err.message);
    }
}

export default connectToMongoDB;