# 🛒 E-commerce REST API

Node.js + Express + MongoDB tabanlı bir e-ticaret API’sidir. Kullanıcı kaydı/girişi, ürün yönetimi, sipariş oluşturma, role-based erişim, JWT doğrulama ve hata yönetimi gibi temel özellikleri kapsar.

---

## 📌 Proje Hedefleri

- Kullanıcıların kayıt olup giriş yapabilmesi (JWT doğrulama)
- Admin kullanıcıların ürün ekleyebilmesi
- Her kullanıcının sipariş oluşturabilmesi
- Kullanıcıya özel sipariş geçmişi
- Rol tabanlı erişim kontrolü (admin vs user)
- Hataları merkezi bir şekilde ele alan error middleware
- Profesyonel proje dosya yapısı
- Gerçek dünya backend API mimarisi simülasyonu

---

## 👨‍💻 Açıklama

Bu proje, e-ticaret platformlarının arka plan mimarisine ışık tutan kapsamlı bir Node.js/Express uygulamasıdır. Her bir uç nokta (`/api/users`, `/api/products`, `/api/orders`) bağımsız controller'larla yönetilir. Kullanıcı kimliği JWT ile doğrulanır, admin yetkileri middleware aracılığıyla kontrol edilir. Hatalar için özel error handler middleware'leri kullanılır.

Veritabanı olarak MongoDB tercih edilmiştir. Proje `dotenv` üzerinden yapılandırılmıştır.

---

## 👥 Ekip / Kaynaklar

- 👤 Geliştirici: [Quenn Exe ] 
- 📚 Kaynaklar:
  - [Node.js Resmi Dokümantasyon](https://nodejs.org/en/docs/)
  - [Express.js](https://expressjs.com/)
  - [MongoDB Atlas](https://www.mongodb.com/atlas)
  - [Postman API Test Aracı](https://www.postman.com/)
  - [JWT - jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
  - [bcryptjs - şifre karma algoritması](https://github.com/dcodeIO/bcrypt.js)
  - [Mongoose ODM](https://mongoosejs.com/)

---

## 🚀 Nasıl Başlatılır?

``bash
git clone https://github.com/kullanici/ecommerce-api.git
cd ecommerce-api
npm install
npm run dev



# ✅ Test
- Giriş/Güvenlik testleri için: Postman JWT Authorization Header

- Hatalı token ile 401 cevabı alınması test edilir

- Admin olmayan kullanıcıyla ürün eklenemez

- Sipariş oluşturma sadece login kullanıcıya açıktır

# 🧠 Ekstra Geliştirme Önerileri
- Stripe entegrasyonu

- Admin paneli (React ile)

- Ürün yorumları ve rating sistemi

- Sipariş durumu (hazırlanıyor, kargoda vs)

- Kullanıcı şifre sıfırlama (email ile)

