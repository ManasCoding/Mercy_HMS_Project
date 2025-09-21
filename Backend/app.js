import cookieParser from "cookie-parser";
import express from "express";
import { router } from "./routes/user.js";
import cors from "cors";
// import multer from "multer";
import Path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ES module

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));
app.use(cookieParser());


app.use(cors({
  // origin: 'http://localhost:5173',
  origin: "https://mercy-hms-project.vercel.app",
  credentials: true,
}));


app.use("/api", router);


export { app };
