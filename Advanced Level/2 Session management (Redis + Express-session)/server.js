const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Redis Client
const redisClient = createClient({
    legacyMode: true,
    url: process.env.REDIS_URL
});
redisClient.connect().catch(console.error);

// Session Middleware
app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 10 // 10 dakika
        }
    })
);

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('🚀 Session App Çalışıyor');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server çalışıyor: ${PORT}`));