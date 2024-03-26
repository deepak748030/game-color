const parityModel = require('../models/parityModel')
const timerController = async () => {
    try {
        let countPeriod = 1;
        const data = await parityModel.findOne().sort({ createdAt: -1 });
        // const data = await parityModel.deleteMany();
        console.log(data)
        if (data) {
            countPeriod = data.parity + 1;
        }
        const parityData = new parityModel({
            parity: countPeriod, result: 'red'
        })
        // await parityData.save();
        console.log(parityData)

    } catch (error) {
        console.log(error)
    }
}
timerController()


module.exports = timerController;