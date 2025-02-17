const express = require("express");

const router = express.Router();

const inscriptionController = require("../controllers/inscription");


router.post("/inscription", inscriptionController.signUp);
router.get("/inscription", inscriptionController.showSignUpForm);

module.exports = router;