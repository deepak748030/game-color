const UserModel = require('../models/UserModel');
const BetModel = require('../models/UserBetModel');
const io = require('../server');

const userBetController = async (req, res) => {
    try {
        const { userId } = req.params;
        const { color, betAmount } = req.body;

        // Check if required fields are provided
        if (!color || !betAmount || !userId) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Find user by ID and check wallet balance
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (user.wallet < betAmount) {
            return res.status(400).json({
                success: false,
                message: 'Low balance'
            });
        }

        // Deduct bet amount from user's wallet
        user.wallet -= betAmount;
        await user.save();

        // Create new user bet document
        const userBet = new BetModel({ userId, color, betAmount });
        await userBet.save();

        // Emit wallet balance update event
        const newBalance = user.wallet;


        res.status(200).json({
            success: true,
            message: 'User bet data saved successfully'
        });

    } catch (error) {
        console.error('Error in userBetColor controller:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

module.exports = { userBetController };
