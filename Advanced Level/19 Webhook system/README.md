# Webhook System

## 🎯 Proje Hedefleri
Gerçek zamanlı webhook kayıt sistemi. Harici sistemler belirli olaylara abone olabilir ve bu olaylar gerçekleştiğinde otomatik olarak bilgilendirilir.

## 📦 Ekip / Kaynaklar
- Node.js
- Express
- MongoDB (Mongoose)
- Axios
- dotenv
- nodemon
- fs (loglama için)

## 📚 Açıklama

Bu sistemde:

- `/api/webhooks/register`: webhook URL’leri belirli olaylar için kayıt edilir.
- `/api/webhooks/trigger`: bir olay tetiklendiğinde kayıtlı tüm webhook URL’lerine `POST` isteği gönderilir.
- `utils/logger.js`: log dosyasına her gönderimi yazar.
- `middlewares/errorHandler.js`: tüm hataları merkezi olarak yakalar ve yanıtlar.
- MongoDB üzerinde `webhook` kayıtları saklanır.

