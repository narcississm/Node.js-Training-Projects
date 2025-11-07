const express = require("express");
const router = express.Router();

const {
    addComment,
    getApprovedComments,
    getAllComments,
    approveComment,
    deleteComment,
} = require("../controllers/commentController");

const { protect, admin } = require("../middlewares/authMiddleware");

// Kullanıcı yorum ekleyebilir, onaylanmış yorumları görebilir
router.post("/", protect, addComment);
router.get("/", getApprovedComments);

// Admin tüm yorumları görebilir, onaylayabilir, silebilir
router.get("/all", protect, admin, getAllComments);
router.put("/:id/approve", protect, admin, approveComment);
router.delete("/:id", protect, admin, deleteComment);

module.exports = router;