const Product = require("../models/Product");
const { syncProductToAlgolia, searchProducts } = require("../services/algoliaService");

exports.addProduct = async(req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        await syncProductToAlgolia(product);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: "Ürün eklenirken hata oluştu" });
    }
};

exports.search = async(req, res) => {
    try {
        const { q } = req.query;
        if (!q) return res.status(400).json({ error: "Arama sorgusu boş olamaz" });

        const results = await searchProducts(q);
        res.json(results.hits);
    } catch (err) {
        res.status(500).json({ error: "Arama yapılırken hata oluştu" });
    }
};