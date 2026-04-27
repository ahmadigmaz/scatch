const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) =>{
    const token = req.cookies.token
    if(!token){
    return res.redirect("/");
    }
    try{
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.user = data;
    next();
    }catch(err){
    return res.redirect('/');
    }
}

module.exports = isLoggedIn;