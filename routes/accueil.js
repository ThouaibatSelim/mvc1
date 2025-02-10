//Routes Accueil

const express = require('express');
const accueilControllers = require('../controllers/accueil');

const router = express.Router();

router.get('/', accueilControllers.accueilView);

module.exports = router;