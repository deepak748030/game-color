const parityModel = require('../models/parityModel')
const BetModel = require('../models/UserBetModel');
var countPeriod = 0;
const myCache = require('../helper/myCache')
myCache.set('countPeriods', countPeriod)

const timerController = async () => {
    try {
        let data = await parityModel.findOne().sort({ createdAt: -1 });
        // myCache.set('allData', data)

        // this is for to get all data on single fetch
        // data = myCache.get('allData') 

        // data = await parityModel.deleteMany();
        // console.log('data', data)


        if (data) {
            console.log('not data')
            countPeriod = data.parity + 1;

        }
        myCache.set('countPeriods', countPeriod)
        const result = await declareResult();
        const parityData = new parityModel({
            parity: countPeriod, result: result.color, price: result.totalBetAmount

        })
        const periods = myCache.get('countPeriods')
        console.log('set:', periods)

        await parityData.save();

        // console.log(parityData)
        // console.log('result', result)

    } catch (error) {
        console.log(error)
    }
}
// timerController()
const declareResult = async () => {
    try {
        let period = countPeriod;
        console.log('periods:', countPeriod)

        const betAmountResult = await BetModel.find({ period });

        // Initialize variables to store total bet amounts for each color
        let totalRedBetAmount = 0;
        let totalGreenBetAmount = 0;
        let totalVioletBetAmount = 0;

        // Iterate over betAmountResult array to calculate total bet amounts for each color
        betAmountResult.forEach((cur) => {
            if (cur.color === 'red') {
                totalRedBetAmount += cur.betAmount;
            } else if (cur.color === 'green') {
                totalGreenBetAmount += cur.betAmount;
            } else if (cur.color === 'violet') {
                totalVioletBetAmount += cur.betAmount;
            }
        });

        // Calculate total bet amount across all colors
        const totalBetAmount = betAmountResult.reduce((acc, cur) => acc + cur.betAmount, 0);

        console.log('Red Bet Amount:', totalRedBetAmount);
        console.log('Green Bet Amount:', totalGreenBetAmount);
        console.log('Violet Bet Amount:', totalVioletBetAmount);
        console.log('Total Bet Amount:', totalBetAmount);
        let resultColor;
        if (totalRedBetAmount < totalGreenBetAmount && totalRedBetAmount < totalVioletBetAmount) {
            resultColor = 'red';
        } else if (totalGreenBetAmount < totalRedBetAmount && totalGreenBetAmount < totalVioletBetAmount) {
            resultColor = 'green';
        } else {
            resultColor = 'violet';
        }
        const Allresult = {
            color: resultColor,
            totalBetAmount
        }


        return Allresult;




    } catch (error) {
        console.log('Error:');
    }
};


module.exports = timerController;