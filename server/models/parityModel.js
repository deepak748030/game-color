import mongoose from "mongoose";

const paritySChema = new mongoose.Schema({
    parity: {
        type: Number,
        required: true
    },
    result: {
        type: String,
        required: true,
        enum: ['red', 'green', 'violet'],
    }
})

module.exports = mongoose.model('Parity', paritySChema)