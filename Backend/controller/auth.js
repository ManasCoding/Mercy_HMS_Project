import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../model/user.model.js";
import { hashPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

const register = asyncHandler(async (req, res) => {
  const { name, email, pin, password } = req.body;
  if (!name || !email || !pin || !password) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const findUser = await User.findOne({ email: email });
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
      const token = generateToken({ id: newUser._id });

      res
        .cookie(
          "auth_token",
          JSON.stringify(token, {
            maxAge: 5 * 24 * 60 * 60 * 1000,
            samesite: "none",
          })
        )
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
      const token = generateToken({ id: findUser._id });
      console.log(token);
      return res
        .cookie(
          "auth_token",
          JSON.stringify(token, {
            maxAge: 5 * 24 * 60 * 60 * 1000, samesite: "none",}))
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
  return res
    .clearCookie("auth_token", {path:"/"})
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
});

const getUserData = asyncHandler(async (req, res) => {
  const token = req.cookies.auth_token;
  // console.log(token);
  const user = await User.findOne( req.params.id);
  // console.log(user);
  res.status(200).send(user);
});


const getAllUserData = asyncHandler(async (req, res) => {
  const allUser = await User.find({});
  console.log(allUser);
  res.status(200).send(allUser);
});


const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const id = req.params.id;
    console.log(id);

    if (!id) {
      return res.status(404).send({ message: "User Id not found" });
    }

    if (!oldPassword) {
      return res.status(404).send({ message: "Old Password is required" });
    }
    if (!newPassword) {
      return res.status(404).send({ message: "New Password is required" });
    }

    const storedUser = await User.findOne({ _id: id });

    if (!storedUser) {
      return res.status(404).send({ message: "User not found!!!" });
    }
    const passwordHash = await hashPassword(newPassword);

      await User.updateOne(
        { _id: req.user.user_id },
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



export { register, login, logout, getUserData, getAllUserData, updatePassword };
