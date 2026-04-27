const express  = require('express');
const router = express.Router();
const validate = require("../middlewares/SchemaValidation")
const {ownerRegisterSchema, ownerLoginSchema} = require("../validators/validateOwner")
const {registerOwner, loginOwner} = require("../controllers/authController")
const {logout} = require("../controllers/authController")
const productModel = require("../models/productModel");
const isLoggedIn = require("../middlewares/isLoggedIn")


if(process.env.NODE_ENV === 'development'){
    router.post("/create", validate(ownerRegisterSchema) , registerOwner);
}

router.post("/login",validate(ownerLoginSchema), loginOwner);

router.get("/",(req, res)=>{
    res.render("ownerIndex.ejs");
})

router.get("/adminPanel",isLoggedIn,  async (req, res)=>{
    try{
        const products = await productModel.find();
        res.render("adminPanel.ejs", { products });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading products");
    }
})
router.get("/logout", logout);

module.exports = router;