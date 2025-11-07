const Webhook = require("../models/webhookModel");
const axios = require("axios");
const logger = require("../utils/logger");

// Webhook kaydı oluştur
exports.registerWebhook = async(req, res, next) => {
    try {
        const { url, event, secret } = req.body;
        const webhook = await Webhook.create({ url, event, secret });
        res.status(201).json({ success: true, data: webhook });
    } catch (err) {
        next(err);
    }
};

// Webhook olayı tetikle
exports.triggerWebhook = async(req, res, next) => {
    try {
        const { event, payload } = req.body;
        const webhooks = await Webhook.find({ event });

        const results = await Promise.allSettled(
            webhooks.map((hook) =>
                axios.post(hook.url, payload, {
                    headers: {
                        "X-Webhook-Secret": hook.secret || "",
                        "Content-Type": "application/json",
                    },
                })
            )
        );

        results.forEach((result, i) => {
            const hook = webhooks[i];
            if (result.status === "fulfilled") {
                logger(`Webhook sent to ${hook.url}`);
            } else {
                logger(`❌ Failed to send to ${hook.url}: ${result.reason}`);
            }
        });

        res.status(200).json({
            success: true,
            message: `${results.length} webhook(s) triggered.`,
        });
    } catch (err) {
        next(err);
    }
};