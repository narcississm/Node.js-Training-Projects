const express = require("express");
const router = express.Router();
const {
    registerWebhook,
    triggerWebhook,
} = require("../controllers/webhookController");

router.post("/register", registerWebhook); // webhook kayıt
router.post("/trigger", triggerWebhook); // olay tetikleme

module.exports = router;