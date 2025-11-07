const Order = require('../models/Order');

// Sipariş oluştur
exports.createOrder = async(req, res, next) => {
    try {
        const { orderItems, totalPrice } = req.body;

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({ message: 'Sipariş boş olamaz' });
        }

        const order = new Order({
            user: req.user._id,
            orderItems,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } catch (error) {
        next(error);
    }
};

// Kullanıcının siparişlerini getir
exports.getMyOrders = async(req, res, next) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('orderItems.product', 'name price');
        res.json(orders);
    } catch (error) {
        next(error);
    }
};