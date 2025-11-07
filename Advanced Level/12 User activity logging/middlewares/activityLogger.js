// middlewares/activityLogger.js
const ActivityLog = require("../models/ActivityLog");
const { logToConsole } = require("../utils/logger");

const activityLogger = async(req, res, next) => {
    const logEntry = new ActivityLog({
        user: req.body.userId || null,
        action: `${req.method} request to ${req.originalUrl}`,
        method: req.method,
        route: req.originalUrl,
    });

    try {
        await logEntry.save();
        logToConsole(logEntry);
    } catch (error) {
        console.error("Log kaydı sırasında hata:", error);
    }

    next();
};

module.exports = activityLogger;