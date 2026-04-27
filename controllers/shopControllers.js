const bcrypt = require('bcrypt');
const userModel = require("../models/userModel")
const ownerModel = require("../models/ownerModel")
const generateToken = require("../utils/generateToken")
const productModel = require("../models/productModel");

const getProducts = async (req, res) =>{
    try{
        const products = await productModel.find();
        res.render("shop.ejs", {products});
    }catch(err){
        res.status(500).send("something went wrong");
    }
}

module.exports = {getProducts};