const express = require('express');
const { registerController, loginController } = require('../controllers/UserControllers');
const { requireSignIn } = require('../middlewares/authMiddleware');
const otpController = require('../controllers/OTP/otpController');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/send-otp', otpController)

router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true
    })
})
module.exports = router;