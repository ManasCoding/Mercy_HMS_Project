import express from "express";
import { register, login, logout , getUserData, getAllUserData, updatePassword, isLoggedIn, updateProfile, uploads } from "../controller/auth.js";
import upload from "../utils/multer.js";
// import authenticate from "../middleware/auth.middleware.js";
const router = express.Router();



router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/Profile", isLoggedIn, getUserData);
router.get("/allUsers", isLoggedIn, getAllUserData);
router.post("/updatePassword", isLoggedIn, updatePassword);
router.post("/updateProfile", isLoggedIn, updateProfile);
router.post("/upload", isLoggedIn, upload.single("image"), uploads);


export { router };