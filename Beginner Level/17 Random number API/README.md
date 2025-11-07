Bu API, kullanıcıların belirttiği aralıkta rastgele bir sayı üretir. Kullanıcılar, **min** ve **max** parametreleri ile bir aralık belirler ve API, bu aralıkta rastgele bir sayı döner.

## Kullanılan Teknolojiler

- **Node.js**
- **Express.js**

## API Kullanımı

### GET /random

- **Açıklama**: Belirtilen aralıkta rastgele bir sayı döner.
- **Parametreler**:
  - `min`: Sayı aralığının alt sınırı (zorunlu).
  - `max`: Sayı aralığının üst sınırı (zorunlu).

- **Örnek İstek**:
  ```bash
  GET http://localhost:3000/random?min=10&max=100
Yanıt:

json

{
  "randomNumber": 53
}

# Proje Hedefleri
- Kullanıcılara belirli bir aralıkta rastgele sayı üretme imkanı sağlamak.

- API'nin doğru çalıştığını kontrol etmek için temel hata yönetimi eklemek.

- Express.js ile RESTful bir API oluşturmak.