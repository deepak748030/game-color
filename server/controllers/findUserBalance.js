const UserModels = require('../models/UserModel');

const findUserBalance = async (id, io, socket) => {
    try {

        const userdata = await UserModels.findById(id);
        const userBalance = userdata.wallet;
        io.to(socket.id).emit('updatedBalance', userBalance);
        console.log(userBalance)
    } catch (error) {
        console.log(error)

    }

}

module.exports = findUserBalance;