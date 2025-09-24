import jsonwebtoken from "jsonwebtoken";
export const generateToken = (payload) => {
    try {
        return jsonwebtoken.sign(payload, "fkaopirerqiofjafjalk", {
            expiresIn: "5d",
        });
    } catch (error) {
        console.log(error?.message);
        
    }
};