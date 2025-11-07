require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const webhookRoutes = require("./routes/webhookRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/webhooks", webhookRoutes);

// Error handler middleware
app.use(errorHandler);

// MongoDB bağlantısı
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ MongoDB connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });