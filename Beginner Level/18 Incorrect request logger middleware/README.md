# Hatalı İstek Loglayıcı Middleware (errorLogger)

## Açıklama

Express.js uygulamalarında, 400 ve üzeri HTTP status kodları ile dönen hatalı istekleri yakalayıp loglamak için geliştirilmiş middleware.  
İstek bilgilerini konsola ve opsiyonel olarak `error.log` dosyasına kaydeder.

## Kurulum

1. `errorLogger.js` dosyasını projenize ekleyin.  
2. Express uygulamanıza aşağıdaki şekilde dahil edin:

``javascript
const errorLogger = require('./errorLogger');
app.use(errorLogger);

# Kullanım
- Her HTTP isteği sonrası, eğer status kodu 400 veya üzerindeyse, şu formatta log oluşturulur:



# Özelleştirme
- Log dosyası yolu errorLogger.js içinde logPath değişkeni ile ayarlanabilir.

- Log formatı ve hedefi isteğe göre düzenlenebilir.

# Gereksinimler
- Node.js

- Express.js

# Kaynaklar
- Express.js Documentation

- Node.js fs Module