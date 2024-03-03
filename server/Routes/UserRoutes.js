const express = require('express');
const { registerController, loginController } = require('../controllers/UserControllers');
const { requireSignIn } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController)
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true
    })
})
module.exports = router;