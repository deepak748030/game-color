const parityModel = require('../models/parityModel')

const sendAllData = async (io) => {
    try {
        const data = await parityModel.find().sort({ createdAt: -1 }).limit(4);
        io.emit('allRecords', data)
        // console.log("data io emits -->>>>", data)
    } catch (error) {
        console.log('handleAllAllRecords', error)
    }
}

module.exports = sendAllData;