const formValidationSchema = require("../validators/formValidationSchema");

const validateForm = (req, res, next) => {
    const { error } = formValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validateForm;