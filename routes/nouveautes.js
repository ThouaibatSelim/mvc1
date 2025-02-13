const express = require('express');

const nouveautesControllers = require('../controllers/nouveautes');

const router = express.Router();

router.get('/nouveautes', nouveautesControllers.nouveautesView);

module.exports = router;