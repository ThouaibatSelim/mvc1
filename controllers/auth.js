const bcrypt = require("bcrypt");

module.exports = {
    loginView: (req, res) => {
        res.render("connexion");  
    },

    registerUtilisateur: async (req, res) => {
        console.log("Tentative de connexion...");

        const email = req.body.email;
        const motdepasse = req.body.motdepasse;

        if (!email || !motdepasse) {
            return res.status(400).send("Tous les champs sont requis.");
        }

        req.getConnection((erreur, connection) => {
            if (erreur) {
                console.error("Erreur de connexion à la base de données :", erreur);
                return res.status(500).send("Erreur serveur.");
            }

            connection.query('SELECT * FROM utilisateur WHERE email = ?', [email], async (err, resultat) => {
                if (err) {
                    console.error("Erreur SQL :", err);
                    return res.status(500).send("Erreur lors de la connexion.");
                }

                if (resultat.length === 0) {
                    return res.status(401).send("Utilisateur non trouvé.");
                }

                const utilisateur = resultat[0];

                try {
                    const match = await bcrypt.compare(motdepasse, utilisateur.motdepasse);

                    if (match) {
                        req.session.utilisateurId = utilisateur.id;
                        req.session.nom = utilisateur.nom_utilisateur;
                        req.session.prenom = utilisateur.prenom_utilisateur;
                        req.session.email = utilisateur.email;

                        console.log("Connexion réussie :", utilisateur.email);
                        return res.redirect("/profil");
                    } else {
                        return res.status(401).send("Email ou mot de passe incorrect.");
                    }
                } catch (error) {
                    console.error("Erreur de comparaison du mot de passe :", error);
                    return res.status(500).send("Erreur serveur.");
                }
            });
        });
    }
};
