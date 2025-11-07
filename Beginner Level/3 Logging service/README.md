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

Bu proje, **Node.js** kullanılarak geliştirilmiş bir **Loglama Servisi** örneğidir. Uygulama, sunucuya gelen istekleri ve hata mesajlarını **`logs.txt`** dosyasına kaydeder.

---

## 🎯 Proje Hedefleri

1. **Loglama Sistemi Kurma**:
    - Kullanıcı istekleri ve hata mesajlarını kaydetmek için basit bir loglama sistemi oluşturulacak.
    
2. **Dosyaya Yazma**:
    - Loglar, `logs.txt` dosyasına kaydedilecektir.
    
3. **Sunucu ve Hata Yönetimi**:
    - Sunucu isteklerini ve hata mesajlarını düzgün bir şekilde yönetmek.

4. **Basit API Uç Noktaları**:
    - **Ana sayfa isteği** loglanacak.
    - **Hata sayfası isteği** loglanacak.



## 🔧 Kurulum ve Başlatma

### 1. Projeyi başlat:

Aşağıdaki komutları sırasıyla çalıştırarak projeyi başlatabilirsiniz:

``bash
npm init -y

# 📌 Notlar
- Loglar, her istek ve hata durumunda logs.txt dosyasına kaydedilecektir.

- Dosya yazma işlemi asenkron çalıştığı için herhangi bir hata durumunda konsolda hata mesajları gösterilecektir.

# 💡 Geliştirme Önerileri
- Log seviyeleri ekleyebilirsiniz (INFO, WARN, ERROR).

- Farklı log formatları (JSON gibi) ekleyebilirsiniz.

- Daha gelişmiş log yönetimi için loglar bir veritabanına yönlendirilebilir.