const express = require('express');

const aproposControllers = require('../controllers/apropos');

const router = express.Router();

router.get('/apropos', aproposControllers.aproposView);

module.exports = router;