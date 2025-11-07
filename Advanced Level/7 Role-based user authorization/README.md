# Role-Based User Authorization API

## 📌 Proje Hedefleri
- Kullanıcıların kayıt olmasını ve giriş yapmasını sağlamak
- JWT token ile kimlik doğrulama gerçekleştirmek
- Kullanıcılara `role` bazlı yetkilendirme uygulamak (`user`, `admin`)
- Yetkisiz kullanıcıları korunan alanlara erişimden engellemek

## 🧠 Açıklama
Bu proje, Node.js ve Express kullanılarak geliştirilmiş bir role-based (rol tabanlı) yetkilendirme API’sidir. Kullanıcılar sisteme `register` ve `login` endpointleri aracılığıyla dahil olurlar. Giriş yapan kullanıcılara JWT token verilir. Bu token ile korumalı route’lara (`/protected`, `/admin`) erişim sağlanabilir. `admin` rolüne sahip kullanıcılar sadece adminlere açık alanlara erişebilir. Sistemde hata yakalama, parola şifreleme, token doğrulama ve kullanıcı rolleri kontrolü gibi güvenlik mekanizmaları mevcuttur.

## 👨‍💻 Kullanılan Teknolojiler ve Modüller
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs (şifreleme)
- dotenv
- CORS

## 👥 Ekip / Katkıda Bulunanlar
- 👤 Backend: [Quenn Exe]

- 🧪 Test: Manuel testler, Postman

## 🔗 API Endpointleri

| Yöntem | Route | Açıklama |
|--------|-------|----------|
| POST   | `/api/auth/register` | Kullanıcı kayıt olur |
| POST   | `/api/auth/login` | Kullanıcı giriş yapar |
| GET    | `/api/auth/protected` | Giriş yapan tüm kullanıcılara açık |
| GET    | `/api/auth/admin` | Sadece `admin` rolündeki kullanıcılar erişebilir |

## 📦 Kurulum ve Çalıştırma

```bash
git clone https://github.com/kullaniciadi/role-based-auth.git
cd role-based-auth
npm install
