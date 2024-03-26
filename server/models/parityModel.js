const mongoose = require("mongoose");
const paritySchema = new mongoose.Schema({
    parity: {
        type: Number,
        required: true
    },
    result: {
        type: String,
        required: true,
        enum: ['red', 'green', 'violet'],
    }
}, { timestamps: true }); // Move { timestamps: true } inside the options object

module.exports = mongoose.model('Parity', paritySchema);
