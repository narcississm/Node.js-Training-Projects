# 19 - File Upload (Multer)

Bu proje, Express.js ve Multer kütüphanesi kullanarak dosya yükleme işlemlerini gerçekleştirmektedir.

## Proje Hedefleri

- Express.js ile basit bir dosya yükleyici uygulaması oluşturmak.
- Multer kütüphanesini kullanarak yüklenen dosyaları sunucuya kaydetmek.
- Kullanıcıya başarı ya da hata mesajları göstermek.

## Özellikler

- **Dosya Yükleme**: Kullanıcı, form üzerinden dosya yükleyebilir.
- **Yükleme Konfigürasyonu**: Dosya adı, yüklenme tarihi gibi özellikler belirlenmiştir.
- **Yükleme Başarısı ve Hata Mesajları**: Kullanıcıya dosya yükleme işleminin başarılı olduğunu ya da hata oluştuğunu bildiren mesajlar sunulur.

## Teknolojiler

- **Node.js**: Sunucu tarafı işlemlerini yönetir.
- **Express.js**: Web framework, API'lerin yönetimi için kullanılır.
- **Multer**: Dosya yükleme işlemi için kullanılan kütüphane.

## Kullanım

### 1. Gerekli Bağımlılıkları Kurma

Proje dizininde terminali açarak aşağıdaki komutla gerekli bağımlılıkları yükleyin:

``bash
npm install
# 2. Sunucuyu Başlatma
Sunucuyu başlatmak için:
npm start

# 3. Dosya Yükleme
index.html sayfasındaki form aracılığıyla dosya yükleyebilirsiniz.

Yüklediğiniz dosya, uploads/ klasörüne kaydedilecektir.

# 4. Proje Dosya Yapısı

- Hatalar ve Çözüm Yöntemleri
- Sunucuya Bağlanamama: Eğer sunucu başlatılmıyorsa, terminaldeki hata mesajlarını kontrol edin. Gerekirse bağımlılıkları yeniden yüklemek için npm install komutunu kullanın.

- Dosya Yükleme Hatası: Yükleme sırasında "Dosya seçilmedi!" hatası alıyorsanız, dosya seçimi yapıldığından emin olun.