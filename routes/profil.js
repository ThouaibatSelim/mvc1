const express = require("express");
const router = express.Router();

router.get("/profil", (req, res) => {
    if (!req.session.utilisateurId) {
        return res.redirect("/connexion");
    }

    res.render("profil", {
        nom: req.session.nom,
        prenom: req.session.prenom,
        email: req.session.email
    });
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/connexion");
    });
});

module.exports = router;