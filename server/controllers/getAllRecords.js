const parityModel = require('../models/parityModel')

const handleAllAllRecords = async (req, res) => {
    try {
        const data = await parityModel.find().sort({ createdAt: -1 }).limit(4);
        res.status(200).send(data)
    } catch (error) {
        console.log('handleAllAllRecords', error)
    }
}

module.exports = handleAllAllRecords;

