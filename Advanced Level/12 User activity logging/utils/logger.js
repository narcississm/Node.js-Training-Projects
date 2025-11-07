// utils/logger.js
const logToConsole = (data) => {
    console.log(`[${data.timestamp.toISOString()}] ${data.method} ${data.route} - ${data.action}`);
};

module.exports = { logToConsole };