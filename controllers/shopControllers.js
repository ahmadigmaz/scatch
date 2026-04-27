const bcrypt = require('bcrypt');
const userModel = require("../models/userModel")
const ownerModel = require("../models/ownerModel")
const generateToken = require("../utils/generateToken")

const getProducts = (req, res) =>{
    res.render("shop.ejs");
}

module.exports = {getProducts};