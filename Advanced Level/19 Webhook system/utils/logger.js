const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/webhook.log");

const logger = (message) => {
    const log = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFile(logFilePath, log, (err) => {
        if (err) console.error("❌ Log error:", err);
    });
};

module.exports = logger;