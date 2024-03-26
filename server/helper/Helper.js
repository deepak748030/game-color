// Function to perform action every 2 minutes
let countperiod = 1;
const performAction = async (io) => {
    console.log('Action performed every 2 minutes');
    // console.log(countperiod)
    countperiod++;
    io.emit('countPeriods', countperiod)




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
        // io.emit('countPeriods', countperiod)
        // console.log(countperiod)
    }, 1000);
};

module.exports = { startCountdown, performAction, countperiod };
