const express = require('express');

const formptvControllers = require('../controllers/formptv');

const router = express.Router();

router.get('/formptv', formptvControllers.formptvView);

module.exports = router;