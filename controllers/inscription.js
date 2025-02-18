// const bcrypt = require("bcrypt");

// module.exports = {

//     showSignUpForm: (req, res) => {
//         res.render("inscription");
//     },

//     signUp: async (req, res) => {

//         console.log("Données reçues du formulaire :", req.body);

//         try {

//             const nom = req.body.nom;
//             const prenom = req.body.prenom;
//             const email = req.body.email;
//             const motdepasse = req.body.motdepasse;

//             console.log("nom :", nom);
//             console.log("prenom :", prenom);
//             console.log("email :", email);
//             console.log("mot de passe (avant hashage) :", motdepasse);

//             // Hachage du mot de passe
//             const saltRounds = 10;
//             const hashedPassword = await bcrypt.hash(motdepasse, saltRounds);

//             let requeteSQL = 
//                 "INSERT INTO utilisateur(nom_utilisateur, prenom_utilisateur, email, motdepasse) VALUES (?, ?, ?, ?);";
//             let ordreDonnees = [nom, prenom, email, hashedPassword];

//             req.getConnection((erreur, connection) => {
//                 if (erreur) {
//                     console.error("Erreur de connexion à la base de données :", erreur);
//                     return res.status(500).json({ message: "Erreur serveur." });
//                 }

//                 connection.query(requeteSQL, ordreDonnees, (err, resultat) => {
//                     if (err) {
//                         console.error("Erreur lors de l'inscription :", err);
//                         return res.status(500).json({ message: "Erreur lors de l'inscription." });
//                     }

//                     console.log("Inscription réussie :", resultat);
//                     res.redirect("/accueil");
//                 });
//             });

//         } catch (error) {
//             console.error("Erreur :", error);
//             res.status(500).json({ message: "Une erreur est survenue." });

            
//         }
//     }
// };


const bcrypt = require("bcrypt");

module.exports = {
    showSignUpForm: (req, res) => {
        res.render("inscription");
    },

    signUp: async (req, res) => {
        const { nom, prenom, email, motdepasse } = req.body;

        if (!nom || !prenom || !email || !motdepasse) {
            return res.status(400).send("Tous les champs sont requis.");
        }

        const hashedPassword = await bcrypt.hash(motdepasse, 10);

        req.getConnection((erreur, connection) => {
            if (erreur) {
                console.error("Erreur de connexion DB :", erreur);
                return res.status(500).send("Erreur serveur.");
            }

            const requeteSQL = "INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, email, motdepasse) VALUES (?, ?, ?, ?)";
            const ordreDonnees = [nom, prenom, email, hashedPassword];

            connection.query(requeteSQL, ordreDonnees, (err, result) => {
                if (err) {
                    console.error("Erreur SQL :", err);
                    return res.status(500).send("Erreur lors de l'inscription.");
                }

                req.session.utilisateurId = result.insertId;
                req.session.nom = nom;
                req.session.prenom = prenom;
                req.session.email = email;

                console.log("Utilisateur inscrit :", email);
                return res.redirect("/profil");
            });
        });
    }
};

