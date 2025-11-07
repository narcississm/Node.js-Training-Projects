# Real-time Task Distribution Platform

## 📌 Proje Hedefleri
- Gerçek zamanlı görev oluşturma ve dağıtma
- Socket.io ile kullanıcılar arası anlık iletişim
- MongoDB ile görev verilerinin saklanması
- Web arayüzü ile görev gönderimi

## 📂 Açıklama
Bu platform, görevlerin gerçek zamanlı olarak oluşturulup kullanıcılara dağıtılmasını sağlar. Admin tarafından oluşturulan görevler, Socket.io ile tüm istemcilere anında gönderilir. Görev durumu ve eşleştirme MongoDB üzerinde yönetilir. Sistem hataları için özel logger ve hata yönetimi modülleri mevcuttur.

## 👨‍💻 Ekip / Kaynaklar
- Geliştirici: [ Quenn Exe]
- Backend: Node.js, Express.js, MongoDB, Socket.io
- Frontend: HTML + JS
- Destekleyici: dotenv, cors, morgan, custom logger
