import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully",connection.connection.host);
    } catch (error) {
        console.log(error?.message);
        process.exit(1);
    }
};

export default dbConnect;