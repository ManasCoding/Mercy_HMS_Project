import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../model/user.model.js";
import { hashPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import jsonwebtoken from "jsonwebtoken";
// import uploads from "../utils/multer.js";
import multer from "multer";
import crypto from "crypto";
import path from "path";

const register = asyncHandler(async (req, res) => {
  const { name, email, pin, password } = req.body;
  if (!name || !email || !pin || !password) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      res.status(400).json({ success: false, message: "User already exists" });
    }
    try {
      const passwordHash = await hashPassword(password);
      let newUser = await User.create({
        name: name,
        email: email,
        pin: pin,
        password: passwordHash,
      });
      const token = generateToken({ email: email, userid: newUser._id });

      res
        .cookie("auth_token", token )
        .status(201)
        .json({
          success: true,
          message: "User created successfully",
          data: newUser,
        });

    } catch (error) {
      console.error(error?.message);
      return res
        .status(500)
        .json({ success: false, message: error?.message, error });
    }
  } catch (error) {
    console.log(error?.message);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.status(400).json({ success: false, message: "User does not exist" });
    }
    const passwordMatch = await findUser.checkPassword(password);
    if (!passwordMatch) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }
    try {
      const token = generateToken({ email: email, userid: findUser._id });
      // console.log(token);
      return res
        .cookie(
          "auth_token", token)
        .status(200)
        .json({ success: true, message: "User logged in successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error?.message,error });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error?.message,error });
  }
});

const logout = asyncHandler(async (req, res) => {
  console.log("logout");
  res.clearCookie("auth_token");
  return res.redirect("/");
});



const uploads = asyncHandler(async (req, res) => {
  console.log(req.user);
  console.log("bfskvbkearbferbvkjv");
  console.log(req.file);
  console.log(req.file.filename);
  const user = await User.findOne({ email: req.user.email });
  user.image = `/images/uploads/${req.file.filename}`;
  console.log(user.image);
  

  await user.save();
  res.status(200).json({ success: true, message: "Image uploaded successfully" });
});

const updateProfile = asyncHandler(async (req, res) => {
  const { gender, date, phone, address } = req.body;
  // console.log(req.body);
  // console.log(req.user);
  const user = await User.findOne({ email: req.user.email });
  // console.log(user);
  user.gender = gender;
  user.date = date;
  user.phone = phone;
  user.address = address;
  await user.save();
  // console.log(user);
  res.status(200).json({ success: true, message: "Profile updated successfully" });
});




function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies.auth_token;
        // console.log(token);
        if (!token) {
          // console.log("hello plz login");
            res.status(401);
            return res.send("Please login first");
        } else {
            const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);
            req.user = decoded;
            // console.log("hello");
            // console.log(token);
            next();
        }
    }
    catch (err) {
        return res.status(401).send("Please login first error");
        // return res.redirect("/");
    }
}  

const getUserData = asyncHandler(async (req, res) => {
  // const token = req.cookies.auth_token;
  // console.log(token);
  // console.log("hello get user data");
  // console.log(req.user);
  // const user = await User.findOne( req.params.id);
  const user = await User.findOne({ email: req.user.email });
  // console.log(user);
  res.status(200).send(user);
});


const getAllUserData = asyncHandler(async (req, res) => {
  // console.log("hello get all user data give me all users");
  // console.log(req.user);
  const allUser = await User.find({});
  console.log(allUser);
  // console.log(allUser.date);
  res.status(200).send(allUser);
});


const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    // const id = req.params.id;
    const id = req.user;
    // console.log(id);

    if (!id) {
      return res.status(404).send({ message: "User Id not found" });
    }

    if (!oldPassword) {
      return res.status(404).send({ message: "Old Password is required" });
    }
    if (!newPassword) {
      return res.status(404).send({ message: "New Password is required" });
    }

    const storedUser = await User.findOne({ email: req.user.email });

    if (!storedUser) {
      return res.status(404).send({ message: "User not found!!!" });
    }
    const passwordHash = await hashPassword(newPassword);

      await User.updateOne(
        { email: req.user.email },
        { password: passwordHash }
      );
      return res
        .status(201)
        .send({ message: "Password updated successfully..." });
    } catch (error) {
    console.log(`System error happens: ${error.message}`);
    return res.status(500).send({ message: "Internal server error...", error });
  }
};



export { register, login, logout, getUserData, getAllUserData, updatePassword, isLoggedIn, updateProfile, uploads };
