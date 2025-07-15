import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../model/user.model.js";
import jsonwebtoken from "jsonwebtoken";

const authenticate = asyncHandler(async (req, res, next) => {
    const { auth_token } = req.cookies;
    console.log(auth_token);
    if (!auth_token) {
        return res.status(401).json({ success: false, message: "Unauthorized, please login" });
    }
    const token = JSON.parse(auth_token);
    console.log(token);
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ success: false, message: "Unauthorized token" });
    }
    console.log("decdata",decoded);
   try {
     const user = await User.findOne({
       _id: decoded.id, 
     });
     console.log("user",user);
     if (!user) {
         return res.status(401).json({ success: false, message: "invalid data" });
     }
     req.user = user;
     next();
   } catch (error) {
    console.error(error?.message);
   }
});

export default authenticate;