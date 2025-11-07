const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const formRoutes = require("./routes/formRoutes");
app.use("/api/form", formRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB bağlantısı başarılı");
        app.listen(5000, () => console.log("Sunucu 5000 portunda"));
    })
    .catch(err => console.error(err));