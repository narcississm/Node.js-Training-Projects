require('dotenv').config();


const port = process.env.PORT;
const apiKey = process.env.API_KEY;

console.log("🔐 Yapılandırma Sistemi Başladı...");
console.log(`🌐 Sunucu Portu: ${port}`);
console.log(`🔑 API Anahtarı: ${apiKey}`);