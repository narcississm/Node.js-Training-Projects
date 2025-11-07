const Joi = require("joi");

const formValidationSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(18).max(99).required(),
    message: Joi.string().min(10).max(500).required()
});

module.exports = formValidationSchema;