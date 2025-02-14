const express = require("express");

const inscriptionController = require("../controllers/inscription");

const router = express.Router();

router.post("/inscription", inscriptionController.signUp);
router.get("/inscription", inscriptionController.showSignUpForm);

module.exports = router;