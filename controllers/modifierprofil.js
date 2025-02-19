module.exports = {
    modifierprofilView: (req, res) => {
        console.log("Vérification des données:", req.session);
        res.render('modifierprofil', {
            nom: req.session.nom,
            prenom: req.session.prenom,
            email: req.session.email,
            motdepasse: req.session.motdepasse
        });
    }
};
