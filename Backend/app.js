import cookieParser from "cookie-parser";
import express from "express";
import { router } from "./routes/user.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  // allowedMethods: ["GET", "POST", "PUT", "DELETE"],
  // allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(router);

export { app };
