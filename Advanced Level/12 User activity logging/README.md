# User Activity Logging System

## 📌 Açıklama
Bu proje, kullanıcıların sistem üzerinde gerçekleştirdiği tüm işlemleri (örneğin: POST /api/users) otomatik olarak log dosyasına ve MongoDB'ye kaydeder. Log verisi route, method, kullanıcı ID’si ve zaman damgasını içerir.

## 🎯 Proje Hedefleri
- Gerçek zamanlı kullanıcı etkinliği kaydı
- MongoDB üzerinde detaylı log tutma
- Log’ların terminale yazdırılması
- Orta ölçekli API’lerde izlenebilirlik sağlama

## 👨‍💻 Ekip / Kaynaklar
- Geliştirici: [Quenn Exe]
- Express.js
- Mongoose
- Morgan
- dotenv
- VSCode, Postman

---

## 🚀 Nasıl Çalıştırılır?

``bash
npm install
npm run dev
POST isteği gönder:
POST http://localhost:5000/api/users
Body:
{
  "username": "ali",
  "email": "ali@example.com"
}
MongoDB'de activitylogs koleksiyonu oluşur ve her istek kaydedilir.