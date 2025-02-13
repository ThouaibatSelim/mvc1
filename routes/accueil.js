//Routes Accueil

const express = require('express');

const accueilControllers = require('../controllers/accueil');

const router = express.Router();

router.get('/accueil', accueilControllers.accueilView);

module.exports = router;