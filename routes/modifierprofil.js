const express = require('express');
const modifierprofilControllers = require('../controllers/modifierprofil');
const router = express.Router();

router.get("/modifierprofil", modifierprofilControllers.modifierprofilView);

module.exports = router;
