
const sendAllData = require("../controllers/sendAllData");
const timerController = require("../controllers/timerController");
const myCache = require('./myCache')

const performAction = async (io) => {
    console.log('Action performed every 2 minutes');
    await timerController()
    sendAllData(io)
};

let minutes = 1;
let seconds = 0;

// Function to start the countdown
const startCountdown = (io) => {
    const countdownInterval = setInterval(() => {
        if (seconds === 0) {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                // Perform action every 2 minutes
                performAction(io);
                minutes = 1; // Reset minutes to 2 for the next cycle


            }
        } else {
            seconds--;
        }

        // Emit countdown data to the frontend
        io.emit('countdown', { minutes, seconds });
        let countperiod = myCache.get('countPeriods')
        io.emit('countPeriods', countperiod)
    }, 1000);
};

module.exports = { startCountdown, performAction };
