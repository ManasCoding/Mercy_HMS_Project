import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// const dbConnect = async () => {
//     try {
//         const connection = await mongoose.connect(process.env.DB_URI);
//         console.log("Database connected successfully",connection.connection.host);
//     } catch (error) {
//         console.log(error?.message);
//         process.exit(1);
//     }
// };


const dbConnect = async () => {
  const DB_URI = "mongodb+srv://Mithun824:Mithun%23824@cluster0.nk5aoal.mongodb.net/Mithun-hms?retryWrites=true&w=majority&appName=Cluster0"

  if (!DB_URI) {
    console.error("❌ DB_URI is undefined! Set it in .env (local) or Render environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
};

export default dbConnect;