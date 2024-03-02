const UserModels = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        const { username, phoneNumber, password, confirmPassword } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Check if phone number already exists
        const existingUser = await UserModels.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(400).json({ error: 'Username or phone number already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModels({ username, phoneNumber, password: hashedPassword });
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const loginController = async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;

        // Find user by phone number
        const user = await UserModels.findOne({ phoneNumber });

        // Check if user exists
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with token
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { registerController, loginController };
