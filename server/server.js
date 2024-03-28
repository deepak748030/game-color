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


app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', router);
app.use('/api/v1', betRouter);
<<<<<<< HEAD

=======
app.get('/'),(req,res)=>{
res.send('hello')}
    )
DbConnect(); // Connect to the database
>>>>>>> f2425bf7697a6a95dd18f013e1c049cbd4ce7d68
io.on('connection', (socket) => {

    console.log('Total connected clients:', io.engine.clientsCount);
    socket.on('userBalance', (data) => {
        // console.log('userbalance done')
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

