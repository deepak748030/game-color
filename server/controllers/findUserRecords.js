const userBetModel = require('../models/UserBetModel')

const findUserRecords = async (userId, io, socket) => {
    try {

        const userRecords = await userBetModel.find({ userId: userId }).limit(4).sort({ timestamp: -1 })
        // console.log(userId)
        // console.log(userRecords)
        io.to(socket.id).emit('userRecords', userRecords);

    } catch (error) {
        console.log(`error:`, error)

    }
}

module.exports = findUserRecords;