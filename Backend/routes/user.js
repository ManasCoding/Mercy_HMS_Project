import express from "express";
import { register, login, logout , getUserData, getAllUserData, updatePassword} from "../controller/auth.js";
import authenticate from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticate, logout);
router.get("/userProfile", getUserData);
router.get("/allUsers", getAllUserData);
router.post("/updatePassword", updatePassword);
export { router };