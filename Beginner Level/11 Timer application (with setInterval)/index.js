let countdown = 10;

console.log("⏳ Timer başlatılıyor...");

const timer = setInterval(() => {
    if (countdown > 0) {
        console.log(`🕒 Kalan süre: ${countdown} saniye`);
        countdown--;
    } else {
        console.log("✅ Süre doldu!");
        clearInterval(timer);
    }
}, 1000); // 1 saniyede bir çalışır