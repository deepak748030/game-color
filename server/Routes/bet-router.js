const express = require('express');
const router = express.Router();

router.post('/bet/:userId', (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send({ ok: true })
})



module.exports = router;