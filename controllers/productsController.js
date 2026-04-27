const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const productsModel = require("../models/productModel");



const productsController = async (req, res) => {
    try {
        const { name, price, discount, bgcolour, panelcolour, textcolour } = req.body;
        const image = req.file && typeof req.file.path === 'string'
            ? req.file.path
            : "/images/defaultProductImg.jpeg";

        const product = await productsModel.create({
            name,
            price,
            discount,
            bgcolour,
            panelcolour,
            textcolour,
            image
        });
        res.redirect('/owners/adminPanel');

    } catch (err) {
        console.error(err);
        res.status(500).send(err.message || "Error");
    }
};

module.exports = {productsController}