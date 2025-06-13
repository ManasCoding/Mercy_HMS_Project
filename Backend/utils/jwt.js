import jsonwebtoken from "jsonwebtoken";
export const generateToken = (payload) => {
    try {
        return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "5d",
        });
    } catch (error) {
        console.log(error?.message);
        
    }
};