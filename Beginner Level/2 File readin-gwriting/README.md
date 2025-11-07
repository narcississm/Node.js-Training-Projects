## 👥 Ekip / Kaynaklar

- **Proje Sahibi**: [ Quenn Exe]
- **Kullanılan Teknolojiler**:
    - Node.js
    - Express.js
    - fs (file system) modülü

- **Kaynaklar**:
    - [Node.js Resmi Belgelemesi](https://nodejs.org/)
    - [Express.js Resmi Belgelemesi](https://expressjs.com/)

---

## 📝 Açıklama

Bu proje, **Node.js** kullanılarak geliştirilmiş basit bir **Dosya Okuma/Yazma API** örneğidir. API, kullanıcıların bir dosyaya veri yazmalarına ve bu dosyadaki verileri okumalarına olanak sağlar. Veriler, `data.txt` dosyasına kaydedilir ve okunur.

API, aşağıdaki iki temel işlemi sağlar:

1. **Veri Yazma**: Kullanıcılar, POST isteğiyle veri yazabilir.
2. **Veri Okuma**: Kullanıcılar, GET isteğiyle dosyadaki veriyi okuyabilir.

---

## 🎯 Proje Hedefleri

1. **Dosya Yönetimi**:
    - Kullanıcıların bir dosyaya veri yazmalarını sağlama.
    - Dosyadaki mevcut veriyi okuma.
    
2. **Basit RESTful API Tasarımı**:
    - Temel `POST` ve `GET` işlemlerini uygulama.
    - Dosya sistemini kullanarak veri kalıcılığı sağlama.

3. **API Test Etme**:
    - API uç noktalarını Postman gibi araçlarla test etme.



## 🔧 Kurulum ve Başlatma

### 1. Projeyi başlat:

Aşağıdaki komutları sırasıyla çalıştırarak projeyi başlatabilirsiniz:

``bash

npm init -y



# 💡 Geliştirme Önerileri
-Hata yönetimini genişlet.

-Birden fazla kullanıcı desteği eklemek için veritabanı entegrasyonu yap.

-Dosya okuma ve yazma işlemleri sırasında performans iyileştirmeleri yap.

-Postman testleri ile uç noktaları doğrula.