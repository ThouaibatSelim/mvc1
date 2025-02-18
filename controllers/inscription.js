const bcrypt = require("bcrypt");

module.exports = {
    showSignUpForm: (req, res) => {
        res.render("inscription");
    },

    signUp: async (req, res) => {

        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.email;
        const motdepasse = req.body.motdepasse;

        if (!nom || !prenom || !email || !motdepasse) {
            return res.status(400).send("Tous les champs sont requis.");
        }

        const hashedPassword = await bcrypt.hash(motdepasse, 10);

        req.getConnection((erreur, connection) => {
            if (erreur) {
                console.error("Erreur de connexion à la base de données :", erreur);
                return res.status(500).send("Erreur serveur.");
            }

            const requeteSQL = "INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, email, motdepasse) VALUES (?, ?, ?, ?)";
            const ordreDonnees = [nom, prenom, email, hashedPassword];

            connection.query(requeteSQL, ordreDonnees, (err, resultat) => {
                if (err) {
                    console.error("Erreur SQL :", err);
                    return res.status(500).send("Erreur lors de l'inscription.");
                }

                req.session.utilisateurId = resultat.insertId;
                req.session.nom = nom;
                req.session.prenom = prenom;
                req.session.email = email;

                console.log("Inscription réussie :", email);
                return res.redirect("/profil");
            });
        });
    }
};

