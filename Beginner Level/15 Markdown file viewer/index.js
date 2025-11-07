// index.js

const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Görüntülenecek markdown dosyasının yolu
const filePath = path.join(__dirname, 'example.md');

// Dosyayı oku
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("❌ Dosya okunamadı:", err);
        return;
    }

    // Markdown'ı HTML'e çevir
    const html = marked.parse(data);

    // HTML çıktısını konsola yazdır
    console.log("📄 HTML'e dönüştürülmüş içerik:\n");
    console.log(html);
});