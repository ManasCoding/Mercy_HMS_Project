import express from "express";
import { register, login, logout , getUserData, getAllUserData, updatePassword, isLoggedIn} from "../controller/auth.js";
// import authenticate from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isLoggedIn, logout);
router.get("/Profile", isLoggedIn, getUserData);
router.get("/allUsers", isLoggedIn, getAllUserData);
router.post("/updatePassword", isLoggedIn, updatePassword);
export { router };