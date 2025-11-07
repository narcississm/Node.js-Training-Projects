import axios from 'axios';
import dotenv from 'dotenv';

// .env dosyasını yükleyin
dotenv.config();

// API URL'sini almak için çevre değişkenini kullanın
const apiUrl = process.env.API_URL || 'https://jsonplaceholder.typicode.com/users';

// API'den veri çekme ve loglama
async function fetchData() {
    try {
        const response = await axios.get(apiUrl);
        console.log('Veri Çekildi:', response.data);
    } catch (error) {
        console.error('Hata oluştu:', error);
    }
}

// API'den veri çek
fetchData();