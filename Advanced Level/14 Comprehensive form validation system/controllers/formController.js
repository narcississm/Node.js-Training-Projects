const FormData = require("../models/FormData");

exports.submitForm = async(req, res) => {
    const data = new FormData(req.body);
    await data.save();
    res.status(201).json({ message: "Form başarıyla kaydedildi", data });
};

exports.getForms = async(req, res) => {
    const forms = await FormData.find();
    res.json(forms);
};