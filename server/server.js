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
DbConnect(); // Connect to the database
const betRouter = require('./Routes/bet-router')
const { startCountdown, performAction } = require('./helper/Helper');
const findUserBalance = require('./controllers/findUserBalance');
const findUserRecords = require('./controllers/findUserRecords')
const myCache = require('./helper/myCache');
const sendAllData = require('./controllers/sendAllData');

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', router);
app.use('/api/v1', betRouter);

var socketId = new Object;

io.on('connection', (socket) => {
    console.log('Total connected clients:', io.engine.clientsCount);
    sendAllData(io)
    socket.on('userBalance', (data) => {
        socketId[data._id] = socket.id;
        myCache.set('sockets', socketId);
        findUserBalance(data._id, io, socket)
        // console.log(`finduser`)
        findUserRecords(data._id, io, socket)

    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
        console.log('Total connected clients:', io.engine.clientsCount);
    });
});

startCountdown(io); // Start the countdown timer
// performAction(io)


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

