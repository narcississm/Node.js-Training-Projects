require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const taskRoutes = require('./routes/taskRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const { initSocket } = require('./sockets/taskSocket');
const { logger } = require('./utils/logger');

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// Routes
app.use('/api/tasks', taskRoutes);

// Error Handler
app.use(errorHandler);

// Socket
initSocket(server);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        logger.info('MongoDB connected');
        server.listen(process.env.PORT, () => {
            logger.info(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => logger.error(err.message));