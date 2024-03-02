const express = require('express')
const cors = require('cors');
const { Server } = require('socket.io')
const http = require('http')
const PORT = 3000
const router = require('./Routes/UserRoutes')
const app = express();
const server = http.createServer(app);
const io = new Server(server)
const DbConnect = require('./config');
DbConnect()

app.use(cors())
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



server.listen(PORT, () => {
    console.log(`server started on port no ${PORT}`)
})