const express = require('express');
const { userBetController } = require('../controllers/betControllers');
const router = express.Router();

router.post('/bet/:userId', userBetController)



module.exports = router;