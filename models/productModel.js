const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image:{
        type: String,
        default: "defaultProductImg.png",
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        default: 0
    },
    bgcolour:{
        type: String
    },
    panelcolour:{
        type: String
    }, 
    textcolour:{
        type: String
    }
})

module.exports = mongoose.model('product', productSchema)