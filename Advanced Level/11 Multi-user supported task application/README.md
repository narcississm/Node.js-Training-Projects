# Multi-user Supported Task Application

## Proje Hedefleri
- Çoklu kullanıcı desteğiyle kişisel görev yönetimi.
- Kullanıcı kayıt, giriş ve JWT tabanlı güvenli yetkilendirme.
- CRUD işlemleri ile görev oluşturma, listeleme, güncelleme ve silme.
- Her kullanıcının yalnızca kendi görevlerine erişimi.

## Açıklama
Node.js, Express ve MongoDB kullanarak çok kullanıcılı görev yönetimi API'si. Kullanıcılar kayıt olup giriş yapabilir, kendi görevlerini yönetebilirler. JWT ile güvenlik sağlanır.

## Ekip / Kaynaklar
- Teknolojiler: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- Kaynaklar:
  - MongoDB ve Mongoose dokümantasyonu
  - JSON Web Token resmi sitesi
  - bcryptjs dokümanları

## Kurulum & Çalıştırma
1. Projeyi klonlayın ve dizine gidin.
2. Paketleri yükleyin:
npm install


3. `.env` dosyasını oluşturup içine:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
bilgilerini girin.

4. Sunucuyu başlatın:
npm run dev


5. Postman veya benzeri araçlarla `/api/auth/register` ve `/api/auth/login` üzerinden kullanıcı işle
6. /api/tasks endpoint’leriyle görev yönetimi yapabilirsiniz.