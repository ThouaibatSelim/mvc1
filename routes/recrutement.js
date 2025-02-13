const express = require('express');

const recrutementControllers = require('../controllers/recrutement');

const router = express.Router();

router.get('/recrutement', recrutementControllers.recrutementView);

module.exports = router;