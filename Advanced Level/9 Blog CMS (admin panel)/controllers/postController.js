const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');

// Tüm postları al (admin/editor sadece)
const getPosts = asyncHandler(async(req, res) => {
    const posts = await Post.find().populate('author', 'username email');
    res.json(posts);
});

// Yeni post oluştur (admin/editor)
const createPost = asyncHandler(async(req, res) => {
    const { title, body, tags, published } = req.body;
    const post = new Post({
        title,
        body,
        tags,
        published,
        author: req.user._id,
    });
    const createdPost = await post.save();
    res.status(201).json(createdPost);
});

// Tek post al
const getPostById = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id).populate('author', 'username email');
    if (post) {
        res.json(post);
    } else {
        res.status(404);
        throw new Error('Post bulunamadı');
    }
});

// Post güncelle (admin/editor)
const updatePost = asyncHandler(async(req, res) => {
    const { title, body, tags, published } = req.body;

    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error('Post bulunamadı');
    }

    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        res.status(403);
        throw new Error('Yetkiniz yok');
    }

    post.title = title || post.title;
    post.body = body || post.body;
    post.tags = tags || post.tags;
    post.published = typeof published === 'boolean' ? published : post.published;

    const updatedPost = await post.save();
    res.json(updatedPost);
});

// Post sil (admin/editor)
const deletePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error('Post bulunamadı');
    }

    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        res.status(403);
        throw new Error('Yetkiniz yok');
    }

    await post.remove();
    res.json({ message: 'Post başarıyla silindi' });
});

module.exports = {
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
};