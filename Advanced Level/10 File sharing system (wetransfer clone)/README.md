# File Sharing System (WeTransfer Clone)

## Proje Hedefleri
- Kullanıcıların dosya yükleyip paylaşabileceği hızlı ve basit bir API geliştirmek.
- Yüklenen dosyaların güvenli şekilde sunulması ve indirilebilir olması.
- Dosya paylaşım linklerinin oluşturulması.
- (Opsiyonel) Dosya linkinin e-posta yoluyla gönderilmesi.

## Açıklama
Node.js ve Express kullanılarak geliştirilmiş, dosya yükleme ve paylaşma işlevini sağlayan basit bir backend sistemi. Dosyalar `uploads` klasörüne kaydedilir ve link üzerinden erişim sağlanır. İstersen mail ile link gönderimi de aktif edilebilir.

## Ekip / Kaynaklar
- Teknolojiler: Node.js, Express, Multer, Nodemailer
- Kaynaklar:
  - Resmi Node.js ve Express dökümantasyonları
  - Multer ve Nodemailer dokümanları
  - Stack Overflow ve online makaleler

## Kurulum & Çalıştırma
1. Projeyi klonlayın ve dizine girin.
2. Paketleri yükleyin:
npm install

3. `.env` dosyasını oluşturup e-posta bilgilerinizi girin.
4. Sunucuyu başlatın:
npm run dev
5. Postman veya benzeri araçlarla `/api/files/upload` endpoint’ine dosya yükleyip test edebilirsiniz.