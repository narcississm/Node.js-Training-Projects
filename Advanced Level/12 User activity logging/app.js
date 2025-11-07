// app.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const activityLogger = require("./middlewares/activityLogger");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(activityLogger); // Kullanıcı aktivitelerini kaydet

// Routes
app.use("/api/users", userRoutes);

// Veritabanına bağlan
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB bağlantısı başarılı");
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
    })
    .catch((err) => console.error("MongoDB bağlantı hatası:", err));