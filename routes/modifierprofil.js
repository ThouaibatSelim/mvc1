const express = require('express');

const modifierprofilControllers = require('../controllers/modifierprofil');

const router = express.Router();

// router.get('/modifierprofil', );
// // modifierprofilControllers.modifierprofilView
// res.render("modifierprofil", {
//     nom: req.session.nom,
//     prenom: req.session.prenom,
//     email: req.session.email
// });


router.get("/modifierprofil", (req, res) => {

    res.render("modifierprofil", {
        nom: req.session.nom,
        prenom: req.session.prenom,
        email: req.session.email
    });
});


module.exports = router;