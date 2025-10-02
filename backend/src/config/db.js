import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Successfully connected to MONGODB DATABASE");
    } catch (error) {
        console.error("Error in connecting to the MONGODB_URL",error);
        process.exit(1);
    }
}