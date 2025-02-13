const express = require('express');

const directControllers = require('../controllers/direct');

const router = express.Router();

router.get('/direct', directControllers.directView);

module.exports = router;