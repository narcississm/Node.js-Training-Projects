const Product = require('../models/productModel');

// Ürünleri listele
const getAllProducts = async(req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json({ success: true, products });
    } catch (err) {
        next(err);
    }
};

// Yeni ürün ekle
const createProduct = async(req, res, next) => {
    try {
        const { name, sku, quantity, price, category } = req.body;
        const product = await Product.create({ name, sku, quantity, price, category });
        res.status(201).json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// Ürün güncelle
const updateProduct = async(req, res, next) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ success: false, message: 'Ürün bulunamadı' });
        res.json({ success: true, product: updated });
    } catch (err) {
        next(err);
    }
};

// Ürün sil
const deleteProduct = async(req, res, next) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Ürün bulunamadı' });
        res.json({ success: true, message: 'Ürün silindi' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};