# 🔐 Session Management with Redis & Express-session

## 📌 Açıklama

Bu proje, Node.js ile geliştirilmiş bir kullanıcı oturum yönetim sistemidir. `express-session` ve `Redis` kullanılarak, kullanıcı kimliği sunucu tarafında güvenli bir şekilde saklanır. Giriş yapan kullanıcılar oturum bilgileriyle korunur, oturum süresi sona erdiğinde yeniden giriş yapmaları gerekir.

## 🎯 Proje Hedefleri

- Redis üzerinde oturum yönetimi (stateful session)
- Kullanıcı giriş/çıkış mekanizması
- Basit kimlik doğrulama
- Orta seviye güvenlik
- Session cookie ayarları (expire, secure vs.)

## 👥 Ekip / Kaynaklar

### 👨‍💻 Geliştirici
- [Quenn Exe] - Fullstack Developer

### 📚 Kullanılan Teknolojiler / Kaynaklar
- Node.js
- Express
- Redis (local)
- express-session
- connect-redis
- Postman (test için)
- dotenv

## 🚀 Başlangıç

### 🔧 Gereksinimler
- Node.js yüklü olmalı
- Redis yüklü ve çalışıyor olmalı (`redis-server`)

### ⚙️ Kurulum

```bash
git clone https://github.com/kullaniciadi/session-app.git
cd session-app