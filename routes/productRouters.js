const express  = require('express');
const router = express.Router();
const {productsController} = require("../controllers/productsController");
const {upload} = require("../config/cloudinary");
const isloggedIn = require("../middlewares/isLoggedIn")

router.get("/create", (req, res) =>{
    res.render("createNewProduct.ejs");
})

router.post("/create",isloggedIn, upload.single("image") ,productsController);

module.exports = router;