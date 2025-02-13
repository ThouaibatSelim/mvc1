const express = require("express");

const inscriptionController = require("../controllers/inscription");

const router = express.Router();

router.get("/inscription", inscriptionController.signUp);

module.exports = router;