const Comment = require("../models/Comment");

// Yorum ekle (user)
const addComment = async(req, res, next) => {
    try {
        const { text } = req.body;
        if (!text) return res.status(400).json({ message: "Yorum boş olamaz" });

        const comment = await Comment.create({
            user: req.user._id,
            text,
            approved: false,
        });

        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
};

// Tüm onaylanmış yorumları listele
const getApprovedComments = async(req, res, next) => {
    try {
        const comments = await Comment.find({ approved: true })
            .populate("user", "username")
            .sort({ createdAt: -1 });

        res.json(comments);
    } catch (error) {
        next(error);
    }
};

// Admin: tüm yorumları listele
const getAllComments = async(req, res, next) => {
    try {
        const comments = await Comment.find()
            .populate("user", "username")
            .sort({ createdAt: -1 });

        res.json(comments);
    } catch (error) {
        next(error);
    }
};

// Admin: yorum onayla
const approveComment = async(req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: "Yorum bulunamadı" });

        comment.approved = true;
        await comment.save();

        res.json({ message: "Yorum onaylandı" });
    } catch (error) {
        next(error);
    }
};

// Admin: yorum sil
const deleteComment = async(req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: "Yorum bulunamadı" });

        await comment.remove();
        res.json({ message: "Yorum silindi" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addComment,
    getApprovedComments,
    getAllComments,
    approveComment,
    deleteComment,
};