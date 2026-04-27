const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    picture:{
        type: String,
        default: "default.png"
    },
    gstin:{
        type: String
    }
})

module.exports = mongoose.model("owner", ownerSchema);