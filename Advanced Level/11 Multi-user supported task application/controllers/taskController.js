const Task = require('../models/Task');

const createTask = async(req, res, next) => {
    const { title, description } = req.body;
    if (!title) {
        res.status(400);
        return next(new Error('Başlık gerekli'));
    }
    const task = await Task.create({
        user: req.user._id,
        title,
        description,
    });
    res.status(201).json(task);
};

const getTasks = async(req, res) => {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
};

const updateTask = async(req, res, next) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(404);
        return next(new Error('Görev bulunamadı'));
    }
    if (task.user.toString() !== req.user._id.toString()) {
        res.status(401);
        return next(new Error('Yetkisiz işlem'));
    }
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
};

const deleteTask = async(req, res, next) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(404);
        return next(new Error('Görev bulunamadı'));
    }
    if (task.user.toString() !== req.user._id.toString()) {
        res.status(401);
        return next(new Error('Yetkisiz işlem'));
    }
    await task.remove();
    res.json({ message: 'Görev silindi' });
};

module.exports = { createTask, getTasks, updateTask, deleteTask };