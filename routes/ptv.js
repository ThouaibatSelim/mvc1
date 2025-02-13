const express = require('express');

const ptvControllers = require('../controllers/ptv');

const router = express.Router();

router.get('/ptv', ptvControllers.ptvView);

module.exports = router;