const Joi = require("joi");

const ownerRegisterSchema = Joi.object({
    fullname: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    gstin: Joi.string().optional()
});

const ownerLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});


module.exports = {ownerRegisterSchema, ownerLoginSchema};