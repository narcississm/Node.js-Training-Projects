# Node.js-TemelSeviyeProjeler


Bu dosya, Node.js ile geliştirilmiş 20 farklı temel ve orta seviye proje için kısa açıklamalar ve öğrenim hedeflerini içerir. Her proje, Node.js dünyasına sağlam bir giriş ve pratik deneyim kazandıracak.

---

## 1. Basit RESTful API (GET/POST) / Simple RESTful API (GET/POST)

📌 **Açıklama:**  
GET ve POST isteklerini işleyebilen basit bir RESTful API oluşturulur. Veriler sunucu belleğinde saklanır.

🎯 **Öğrenilecekler:**  
- HTTP metotları (GET, POST)  
- Express.js temel kullanımı  
- JSON veri işleme

---

## 2. Dosya Okuma/Yazma / File Reading/Writing

📌 **Açıklama:**  
Node.js `fs` modülü kullanılarak dosyalardan veri okuma ve dosyalara veri yazma işlemleri gerçekleştirilir.

🎯 **Öğrenilecekler:**  
- `fs` modülü  
- Asenkron ve senkron dosya işlemleri  
- Hata yönetimi

---

## 3. Loglama Servisi / Logging Service

📌 **Açıklama:**  
Sunucu aktivitelerini dosyaya veya konsola loglayan basit bir servis geliştirilir.

🎯 **Öğrenilecekler:**  
- Konsol loglama  
- Dosyaya log yazma  
- Middleware mantığına giriş

---

## 4. JSON Sunucu (lowdb) / JSON Server (lowdb)

📌 **Açıklama:**  
`lowdb` kütüphanesiyle JSON tabanlı hafif veritabanı oluşturularak CRUD işlemleri yapılır.

🎯 **Öğrenilecekler:**  
- `lowdb` kullanımı  
- Basit veri depolama  
- CRUD işlemleri

---

## 5. Form Verisi İşleme / Form Data Processing

📌 **Açıklama:**  
HTTP POST ile gelen form verilerinin sunucuda alınması ve işlenmesi sağlanır.

🎯 **Öğrenilecekler:**  
- `body-parser` middleware  
- Form verisi çözümleme  
- Express.js route yönetimi

---

## 6. Express.js ile "Hello World" / "Hello World" with Express.js

📌 **Açıklama:**  
Express.js ile ilk basit web uygulaması geliştirilir ve "Hello World" mesajı döndürülür.

🎯 **Öğrenilecekler:**  
- Express kurulumu  
- Basit route tanımlama  
- Sunucu başlatma

---

## 7. Basit Web Sunucusu (http modülü) / Simple Web Server (http module)

📌 **Açıklama:**  
Node.js `http` modülü kullanılarak manuel web sunucusu oluşturulur.

🎯 **Öğrenilecekler:**  
- `http` modülü  
- Sunucu yanıtları  
- Port dinleme

---

## 8. API'den Veri Çekip Loglama / Fetch Data from API and Log

📌 **Açıklama:**  
Başka bir API’den veri çekilip, çekilen veriler sunucu tarafında loglanır.

🎯 **Öğrenilecekler:**  
- `node-fetch` veya `axios` kullanımı  
- API çağrıları  
- Asenkron veri işleme

---

## 9. Kişi Listesi (JSON Dosyasında Saklanan) / Contact List Stored in JSON File

📌 **Açıklama:**  
JSON dosyasında saklanan kişi listesi üzerinde CRUD işlemleri yapılır.

🎯 **Öğrenilecekler:**  
- JSON dosya yönetimi  
- Veri güncelleme, silme ve ekleme  
- API route yapısı

---

## 10. Basit URL Kısaltıcı / Simple URL Shortener

📌 **Açıklama:**  
Uzun URL'leri kısa hale getiren, basit bir URL kısaltma servisi.

🎯 **Öğrenilecekler:**  
- Random string üretimi  
- Redirect işlemleri  
- Express route yönetimi

---

## 11. Request Bilgisi Loglama / Request Info Logger

📌 **Açıklama:**  
Gelen isteklerin metod, URL, zaman gibi bilgilerini loglayan middleware.

🎯 **Öğrenilecekler:**  
- Middleware yapısı  
- İstek objesi kullanımı  
- Loglama teknikleri

---

## 12. Zamanlayıcı Uygulaması (setInterval ile) / Timer App (with setInterval)

📌 **Açıklama:**  
Belirli aralıklarla işlem yapan, setInterval kullanan zamanlayıcı.

🎯 **Öğrenilecekler:**  
- `setInterval` ve `setTimeout`  
- Asenkron işlem yönetimi  
- Konsola zaman bilgisi yazdırma

---

## 13. Dosya Boyutu Hesaplayıcı / File Size Calculator

📌 **Açıklama:**  
Verilen dosyanın boyutunu hesaplayan uygulama.

🎯 **Öğrenilecekler:**  
- `fs.stat` kullanımı  
- Dosya meta verisi okuma  
- Hata yönetimi

---

## 14. Basit Chat Sunucusu (socket.io ile) / Simple Chat Server (with socket.io)

📌 **Açıklama:**  
Gerçek zamanlı mesajlaşmayı sağlayan socket.io tabanlı chat sunucusu.

🎯 **Öğrenilecekler:**  
- `socket.io` kullanımı  
- Olay tabanlı iletişim  
- Çoklu istemci yönetimi

---

## 15. .env ile Yapılandırma Sistemi / Configuration System with .env

📌 **Açıklama:**  
`dotenv` kullanarak yapılandırma ve gizli anahtarları yöneten sistem.

🎯 **Öğrenilecekler:**  
- Çevresel değişkenler  
- `.env` dosyası oluşturma  
- Güvenli yapılandırma

---

## 16. Markdown Dosya Görüntüleyici / Markdown File Viewer

📌 **Açıklama:**  
Markdown formatındaki dosyaları HTML'e çevirip sunan uygulama.

🎯 **Öğrenilecekler:**  
- `marked` veya benzeri kütüphane  
- Dosya okuma  
- HTML dönüşümü

---

## 17. Random Sayı API'si / Random Number API

📌 **Açıklama:**  
İstek yapıldığında rastgele sayı döndüren basit API.

🎯 **Öğrenilecekler:**  
- API endpoint oluşturma  
- Rastgele sayı üretimi  
- JSON formatında veri döndürme

---

## 18. Hatalı İstek Loglayıcı Middleware / Error Request Logger Middleware

📌 **Açıklama:**  
Geçersiz veya hatalı istekleri loglayan özel middleware.

🎯 **Öğrenilecekler:**  
- Middleware ile hata yakalama  
- Loglama ve hata mesajları  
- Express hata yönetimi

---

## 19. Dosya Upload (multer) / File Upload with multer

📌 **Açıklama:**  
Kullanıcıdan dosya yüklemesini kabul eden ve kaydeden API.

🎯 **Öğrenilecekler:**  
- `multer` kullanımı  
- Dosya yükleme kontrolü  
- Güvenlik önlemleri

---

## 20. Basit Token Üretici / Simple Token Generator

📌 **Açıklama:**  
JWT veya rastgele token üreten basit servis.

🎯 **Öğrenilecekler:**  
- Token üretimi  
- Güvenlik kavramları  
- Kimlik doğrulama temelleri

---

🚀 **Not:**  
Bu 20 proje Node.js ile temel ve orta seviye becerilerini güçlendirecek. İstersen projelerden biriyle başlayarak dosya yapısı, gereken kütüphaneler ve kodlar detayına geçebiliriz. Senin için yol haritasını oluşturmaya hazırım!

---

