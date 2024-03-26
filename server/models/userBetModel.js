const mongoose = require('mongoose');

// Define schema for user bet data
const userBetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the UserData model
        required: true
    },
    color: {
        type: String,
        required: true
    },
    betAmount: {
        type: Number,
        required: true
    },
    period: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'won', 'lost'], // Status can be pending, won, or lost
        default: 'pending'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create model for user bet data
const UserBet = mongoose.model('UserBet', userBetSchema);

module.exports = UserBet;