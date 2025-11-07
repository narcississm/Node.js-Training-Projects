const Product = require('../models/Product');

// Tüm ürünleri getir
exports.getProducts = async(req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

// Yeni ürün ekle (Admin)
exports.createProduct = async(req, res, next) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        next(error);
    }
};