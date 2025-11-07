const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("FormData", formDataSchema);