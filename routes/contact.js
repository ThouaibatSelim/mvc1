const express = require('express');

const contactControllers = require('../controllers/contact');

const router = express.Router();

router.get('/contact', contactControllers.contactView);

module.exports = router;