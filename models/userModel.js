const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type:String,
        required:true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    contact:
        {
        type: String,
        },
    cart:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
        }
    ],
    order:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
        }
    ],
    profilepic:{
        type: String,
        default: "default.png"
    }
})

module.exports = mongoose.model("user", userSchema);