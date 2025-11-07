const path = require('path');
const fs = require('fs');
const sendEmail = require('../utils/sendEmail');

const uploadFile = (req, res, next) => {
    if (!req.file) {
        res.status(400);
        return next(new Error('Dosya yüklenmedi'));
    }

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(201).json({
        message: 'Dosya yüklendi',
        fileUrl,
    });
};

const getFile = (req, res, next) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, '..', 'uploads', filename);

    fs.access(filepath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404);
            return next(new Error('Dosya bulunamadı'));
        }
        res.download(filepath);
    });
};

module.exports = { uploadFile, getFile };