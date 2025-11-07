# Comment/Moderation System

## 🎯 Proje Hedefleri
- Kullanıcıların yorum yapabilmesi,
- Yorumların onaylanması ve silinmesi için admin/moderatör yetkilendirmesi,
- JWT ile güvenli kullanıcı kimlik doğrulaması,
- Yorumların onay durumuna göre filtrelenmesi.

## 📦 Kullanılan Teknolojiler
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcryptjs (şifreleme)
- dotenv
- CORS

## 🚀 Nasıl Çalıştırılır?
1. Bağımlılıkları yükleyin: `npm install`
2. `.env` dosyası oluşturun ve içine:
3. Sunucuyu başlatın: `npm start`
4. API endpoint'lerini Postman veya başka bir araç ile kullanabilirsiniz.

## 🔐 Kullanım
- `/api/users/register`: Kayıt ol
- `/api/users/login`: Giriş yap
- `/api/comments/`: Yorum ekle (Bearer token gerekli)
- `/api/comments/`: Onaylanmış yorumları listele
- `/api/comments/all`: Tüm yorumları listele (admin)
- `/api/comments/:id/approve`: Yorum onayla (admin)
- `/api/comments/:id`: Yorum sil (admin)

## 👥 Ekip/Kaynaklar
- Proje tek başına yazılmıştır.
- İlham alınan kaynaklar: Node.js, Express dokümantasyonları, JWT tutorial'ları.
