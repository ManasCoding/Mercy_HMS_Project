import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../model/user.model.js";
import { hashPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
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
      res.status(400).json({ success: false, message: "User does not exist" });
    }
    const passwordMatch = await findUser.checkPassword(password);
    if (!passwordMatch) {
      res.status(400).json({ success: false, message: "Invalid password" });
    }
    try {
      const token = generateToken({ id: findUser._id });
      return res
        .cookie(
          "auth_token",
          JSON.stringify(token, {
            maxAge: 5 * 24 * 60 * 60 * 1000,
            samesite: "none",
          })
        )
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
    .clearCookie("auth_token")
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
});

const getUserData = asyncHandler(async (req, res) => {
  const user = req.User;
  res.status(200).json({ success: true, message: "User data", data: user });
});
export { register, login, logout, getUserData };
