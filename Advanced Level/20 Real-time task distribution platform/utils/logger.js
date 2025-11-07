const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/platform.log');

exports.logger = {
    info: (msg) => log('INFO', msg),
    error: (msg) => log('ERROR', msg)
};

function log(level, message) {
    const time = new Date().toISOString();
    const line = `[${time}] [${level}] ${message}\n`;
    fs.appendFileSync(logFile, line);
}