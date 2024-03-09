const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 3000; // Use the port from environment variable or default to 3000
const router = require('./Routes/UserRoutes');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const DbConnect = require('./config');
const { startCountdown, performAction } = require('./helper/Helper');

DbConnect(); // Connect to the database

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', router);

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('message', (msg) => {
        console.log(msg);
        console.log('Total connected clients:', io.engine.clientsCount);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        console.log('Total connected clients:', io.engine.clientsCount);
    });
});

startCountdown(io); // Start the countdown timer
performAction(io)

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
