import express from "express";
// import morgan from "morgan";
import cors from "cors";
import { PORT } from "./configs/config.js";
// import router from "./routes/index.js";
import connectDB from "./configs/dbConnection.js";
// import helmet from "helmet";
import userRouter from "./routes/usersRouter.js";
const app = express();

// app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(cors());
// app.use(morgan("tiny"));

app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

connectDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is successfully running at PORT ${PORT}`);
      });
    } catch (error) {
      console.log(`Cannot connect to the server...`);
    }
  })
  .catch((error) => {
    console.log(`Invalid database connection...`);
  });