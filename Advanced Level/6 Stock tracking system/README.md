# Stock Tracking System

## Açıklama

Bu proje, stok ürünlerinin yönetimini sağlayan bir REST API'dir. Ürünlerin eklenmesi, güncellenmesi, silinmesi ve listelenmesi işlemleri yapılabilir.

## Proje Hedefleri

- MongoDB ile kalıcı ürün verisi saklama
- RESTful API mimarisi ile CRUD işlemleri
- Temiz controller-yapılandırması ve error handler
- Express.js ile modüler backend altyapısı

## Kullanılan Teknolojiler / Kaynaklar

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

## Kurulum ve Çalıştırma

``bash
git clone https://github.com/kullaniciadi/stock-tracking-system.git
cd stock-tracking-system
npm install


# API Endpoint'leri
- GET /api/products – Tüm ürünleri listele

- POST /api/products – Yeni ürün ekle

- PUT /api/products/:id – Ürün güncelle

- DELETE /api/products/:id – Ürün sil

# Ekip
[Quenn Exe ] – Backend Geliştirici

# Kaynaklar
- MongoDB Docs

- Express.js

- Mongoose

