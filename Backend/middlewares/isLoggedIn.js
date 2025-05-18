import jwt from 'jsonwebtoken';
import userModel from '../models/PatientModel.js';
const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401);
            // req.flash('error', 'Please login first');
            return res.redirect('/');
        };
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        let user = await userModel.findOne({email:decoded.email}).select('-password');
        req.user = user;
        next();
    }
    catch (err) {
        res.status(401).send('Please login first')
        // req.flash('error', 'Please login first');
        return res.redirect('/');
    }
}

export default isLoggedIn