require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user) =>{
    return jwt.sign({email:user.email, id:user._id}, process.env.SECRET_KEY, { expiresIn: "1d" });

}

module.exports = generateToken;