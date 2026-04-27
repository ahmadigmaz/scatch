const bcrypt = require('bcrypt');
const userModel = require("../models/userModel")
const ownerModel = require("../models/ownerModel")
const generateToken = require("../utils/generateToken")

const registerOwner = async (req, res)=>{
        try {
            const {fullname, password, email, products, picture, gstin } = req.body;
            const existingOwner = await ownerModel.findOne();
            if(existingOwner) {
                return res.status(403).send("No more owners can be created");
            }
            bcrypt.hash(password, 12, async (err, hash) =>{
            const newOwner = await ownerModel.create({
                fullname, password:hash, email, gstin
            });
            const token = generateToken(newOwner);
            res.cookie("token",token);
            res.status(201).json(newOwner);                
            })
        } catch(err) {
            res.status(500).send(err.message || "Something went wrong");
        }
    }

const loginOwner = async (req, res) =>{
        try{
            const {email, password} = req.body;
            const existingOwner = await ownerModel.findOne({email});
            if(!existingOwner) {
                return res.status(403).send("Unauthorised owner");
            }
            bcrypt.compare(password, existingOwner.password, (err, result)=>{
                if(result){
                    const token = generateToken(existingOwner);
                    res.cookie('token', token);
                    res.redirect("/owners/adminPanel")
                }
            })

        } catch(err) {
            res.status(500).send(err.message || "Something went wrong");
        }
}


const registerUser = async (req, res) =>{
    try{
        const {fullname, email, password} = req.body;
        const existingUser = await userModel.findOne({
            email:email
        })
        if(existingUser) return res.status(403).send("user already exist");
        bcrypt.hash(password, 12, async (err, hash)=>{
            const user = await userModel.create({
                fullname,
                email,
                password:hash
            });
            const token = generateToken(user);
            res.cookie("token",token);
            res.redirect("/users/shop");
        });
    }catch(err){
        res.status(500).send("something went wrong")
    }
}

const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        if(!user) return res.status(403).send('user not found');
        await bcrypt.compare(password,user.password, (err, result)=>{
            if(result){
                const token  = generateToken(user);
                res.cookie("token",token);  
                res.redirect("/users/shop");
            }else{
                res.status(403).send('user not found');
            }
        })
    }catch(err){
        res.status(403).send('user not found');
    }
}

const logout = async (req, res) =>{
    const token = req.cookies.token;
    res.clearCookie("token");
    res.redirect("/");
}

module.exports = {registerOwner,loginOwner, registerUser, loginUser, logout};