# Form Validation System (REST API)

## 🎯 Proje Hedefleri
Kullanıcılardan alınan form verilerinin backend tarafında güvenli ve detaylı biçimde doğrulanması.

## 📦 Kullanılan Teknolojiler
- Express.js
- Joi (doğrulama kütüphanesi)
- Mongoose + MongoDB
- Dotenv, Nodemon

## 🔐 Özellikler
- Joi ile alan bazlı doğrulama
- Middleware sistemiyle modüler yapı
- Form kayıtlarını veritabanına kaydetme ve listeleme

## 🚀 API Endpoint'leri
- `POST /api/form` → Form verisini gönder
- `GET /api/form` → Kayıtlı tüm form verilerini getir
