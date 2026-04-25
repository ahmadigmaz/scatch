// required constants
const express = require('express');
const db = require('./config/dbConnection');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const ownerRouters = require('./routes/ownerRouters');
const productRouters = require('./routes/productRouters');
const userRouters = require('./routes/userRouters');


//global use route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set('view engine', 'ejs');

//routers
app.use("/owners",ownerRouters);
app.use("/users",userRouters);
app.use("/products",productRouters);



//database and servers
db();
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})