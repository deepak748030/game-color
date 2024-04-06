const twilio = require('twilio');
const otpGenerator = require('otp-generator');
const myCache = require('../../helper/myCache'); // Import your cache module

// Twilio Credentials
const accountSid = process.env.TwilioSSID;
const authToken = process.env.TwilioToken;
const twilioPhoneNumber = process.env.TwilioNum;

const client = twilio(accountSid, authToken);

// Function to generate OTP
const generateOTP = () => {
    return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
};

// Function to send OTP SMS
const sendOtp = async (phoneNumber) => {
    try {
        const otp = generateOTP(); // Generate OTP
        const message = await client.messages.create({
            body: `Your Game OTP is: ${otp}`,
            from: twilioPhoneNumber,
            to: phoneNumber
        });
        return otp; // Return generated OTP
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw new Error('Failed to send OTP');
    }
};

const otpController = async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        // Validate phoneNumber (e.g., using a library like 'validator')
        console.log(phoneNumber)
        if (!phoneNumber) {
            throw new Error('Phone number is required');
        }

        // Check if OTP for this phone number is cached
        let otp = myCache.get(phoneNumber);
        if (!otp) {
            // OTP not found in cache, send a new one
            otp = await sendOtp(`+91${phoneNumber}`);
            // Cache the OTP with the default TTL
            myCache.set(phoneNumber, otp, 180);
        }

        // Respond with success message
        res.status(200).json({
            success: true,
            message: 'OTP sent successfully'
        });
    } catch (error) {
        console.error('Error in OTP controller:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send OTP'
        });
    }
};

module.exports = otpController;
