const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.get("/connexion", authController.loginView);
router.post("/connexion", authController.registerUtilisateur);


module.exports = router;