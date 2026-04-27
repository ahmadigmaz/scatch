const express  = require('express');
const router = express.Router();
const validate = require("../middlewares/SchemaValidation");
const {registerSchema,loginSchema } = require("../validators/validateUser")
const {registerUser,loginUser, logout} = require("../controllers/authController")
const {getProducts} = require("../controllers/shopControllers")
const isLoggedIn = require("../middlewares/isLoggedIn")


router.post("/create",validate(registerSchema),registerUser);

router.post("/login", validate(loginSchema),loginUser);

router.get("/logout",logout);

router.get("/shop", isLoggedIn, getProducts);

module.exports = router;