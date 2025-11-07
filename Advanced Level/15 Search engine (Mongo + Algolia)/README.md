# Search Engine API (Mongo + Algolia)

## 🎯 Proje Hedefleri
MongoDB'deki ürün verilerinin Algolia ile entegre edilerek hızlı, etkili ve tam metin arama yapılabilmesini sağlamak.

## 📦 Kullanılan Teknolojiler
- Node.js, Express.js
- MongoDB, Mongoose
- Algolia Search API
- dotenv, cors

## 🚀 API Endpoints
- `POST /api/product` → Yeni ürün ekle ve Algolia'ya senkronize et
- `GET /api/search?q=arananKelime` → Algolia üzerinden ürün araması yap

## 💡 Notlar
- Algolia admin API anahtarınızı `.env` dosyanıza eklemeyi unutmayın.
- MongoDB bağlantınızın doğru olduğundan emin olun.
