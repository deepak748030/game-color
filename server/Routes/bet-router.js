const express = require('express');
const { userBetController } = require('../controllers/betControllers');
const handleAllAllRecords = require('../controllers/getAllRecords');
const router = express.Router();

router.post('/bet/:userId', userBetController)
router.get('/allRecords', handleAllAllRecords)
// /api/v1

module.exports = router;