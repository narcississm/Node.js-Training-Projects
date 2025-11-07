const mongoose = require("mongoose");

const webhookSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    event: {
        type: String,
        required: true,
    },
    secret: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Webhook", webhookSchema);