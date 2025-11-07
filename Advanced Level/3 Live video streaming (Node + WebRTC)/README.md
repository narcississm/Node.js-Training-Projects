# 🎥 Live Video Streaming (Node.js + WebRTC)

## 📖 Açıklama

Bu proje, Node.js üzerinde Socket.io ile WebRTC teknolojisini kullanarak **iki kullanıcı arasında gerçek zamanlı canlı video akışı** sağlamaktadır. İstemci tarafında WebRTC API kullanılarak peer-to-peer bağlantı kurulmakta, sunucu ise sinyalleşme (signaling) için Socket.io ile aracı görevi görmektedir.

## 🎯 Proje Hedefleri

- Gerçek zamanlı düşük gecikmeli video akışı
- İki kullanıcı arasında peer-to-peer WebRTC bağlantısı kurulması
- Socket.io üzerinden sinyal mesajlarının yönetimi
- Basit ve temiz kullanıcı arayüzü
- STUN sunucusu kullanımı ile NAT ve firewall sorunlarının aşılması

## 🛠️ Kullanılan Teknolojiler / Kaynaklar

- Node.js
- Express
- Socket.io
- WebRTC API
- dotenv
- Google STUN sunucusu (stun:stun.l.google.com:19302)

## 🚀 Kurulum & Çalıştırma

### Gereksinimler

- Node.js (v14 ve üzeri)
- npm
- İnternet bağlantısı (STUN sunucusu için)

### Adımlar

``bash
git clone https://github.com/kullaniciadi/webrtc-video-chat.git
cd webrtc-video-chat
npm install
npm run dev

ChatGPT:
İşte Live Video Streaming (Node.js + WebRTC) projesi için tam ve eksiksiz README.md dosyası, direkt olarak kullanabileceğin şekilde — kod formatında:


# 🎥 Live Video Streaming (Node.js + WebRTC)

## 📖 Açıklama

Bu proje, Node.js üzerinde Socket.io ile WebRTC teknolojisini kullanarak **iki kullanıcı arasında gerçek zamanlı canlı video akışı** sağlamaktadır. İstemci tarafında WebRTC API kullanılarak peer-to-peer bağlantı kurulmakta, sunucu ise sinyalleşme (signaling) için Socket.io ile aracı görevi görmektedir.

## 🎯 Proje Hedefleri

- Gerçek zamanlı düşük gecikmeli video akışı
- İki kullanıcı arasında peer-to-peer WebRTC bağlantısı kurulması
- Socket.io üzerinden sinyal mesajlarının yönetimi
- Basit ve temiz kullanıcı arayüzü
- STUN sunucusu kullanımı ile NAT ve firewall sorunlarının aşılması

## 🛠️ Kullanılan Teknolojiler / Kaynaklar

- Node.js
- Express
- Socket.io
- WebRTC API
- dotenv
- Google STUN sunucusu (stun:stun.l.google.com:19302)

## 🚀 Kurulum & Çalıştırma

### Gereksinimler

- Node.js (v14 ve üzeri)
- npm
- İnternet bağlantısı (STUN sunucusu için)

### Adımlar

``bash
git clone https://github.com/kullaniciadi/webrtc-video-chat.git
cd webrtc-video-chat
npm install
npm run dev

- Sunucu çalıştıktan sonra tarayıcınızda http://localhost:3000 adresine gidin. İki farklı sekme veya tarayıcıda açarak birbirinizle canlı video bağlantısı kurabilirsiniz.


# ⚙️ API & İşleyiş
- server.js Socket.io ile sinyal trafiğini yönetir.

- public/index.html basit video arayüzü sağlar.

- public/script.js WebRTC bağlantısını kurar ve yönetir.

- style.css temel stil ve düzenlemeleri yapar.

# 👤 Ekip
[Quenn Exe] – Proje geliştirme ve yönetim

# 📚 Kaynaklar
- WebRTC Official Docs

- Socket.io Documentation

- MDN WebRTC Guide

- Google STUN Servers

# ✨ Sonuç
Bu proje, ileri seviye gerçek zamanlı iletişim teknolojilerinin temel taşlarını içerir ve WebRTC ile canlı video akışı oluşturmak isteyen geliştiriciler için sağlam bir temel sağlar.