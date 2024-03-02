import socketIO from 'socket.io-client';


const ENDPOINT = 'http://localhost:3000/';
const createSocketConnection = (callback) => {
    const socket = socketIO(ENDPOINT, { transports: ["websocket"] });


    socket.on('connect', () => {
        console.log(`Connected to ${socket.id}`);
        if (callback && typeof callback === 'function') {
            callback(socket)
        }
    });
    return () => socket.disconnect();


}

export default createSocketConnection;