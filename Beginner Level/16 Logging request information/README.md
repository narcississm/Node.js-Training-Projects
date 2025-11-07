# 🧾 Logging Request Information with Express & Morgan

## Açıklama

Bu proje, gelen HTTP isteklerinin detaylarını loglayan basit bir Express.js uygulamasıdır. `morgan` middleware’i sayesinde HTTP metodları, URL'ler, yanıt süresi gibi bilgiler otomatik olarak terminale yazdırılır.

Bu yapı profesyonel projelerde hata ayıklama ve analiz için oldukça önemlidir.

---

## Nasıl Kurulur?

1. Projeyi indir veya klonla:

   ``bash
   git clone <repo-url>
   cd request-logger
npm install express morgan
node index.js
http://localhost:


# Öğrenilecek Konular
- Express.js ile sunucu oluşturma

- Middleware kullanımı

- morgan ile loglama yapma

- HTTP istek yapısını anlama

- Temiz log formatlarıyla çalışma

# Kaynaklar
- **Geliştirici**: [ Quenn Exe] 
- Morgan GitHub

E- xpress Resmi Dokümantasyonu

# Geliştirme Önerileri
- Logları bir .log dosyasına yazmak (fs modülüyle)

- Özel log formatları tanımlamak

- Sadece belirli HTTP metodlarını loglamak

- İsteği yapan IP, kullanıcı ajanı (user-agent) bilgilerini loglamak

