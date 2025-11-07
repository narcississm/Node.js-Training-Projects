const express = require('express');
const router = express.Router();
const {
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
} = require('../controllers/postController');
const { protect, editorOrAdmin } = require('../middlewares/authMiddleware');

router.route('/')
    .get(protect, getPosts)
    .post(protect, editorOrAdmin, createPost);

router.route('/:id')
    .get(protect, getPostById)
    .put(protect, editorOrAdmin, updatePost)
    .delete(protect, editorOrAdmin, deletePost);

module.exports = router;