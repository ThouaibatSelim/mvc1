module.exports = {
 
    signUp: async (req, res) => {
        const {nom, prenom, email, motdepasse} = req.body

        console.log("nom :", nom);
        console.log("prenom :", prenom);
        console.log("email :", email);
        console.log("mot de passe :", motdepasse);


            let requeteSQL = "INSERT INTO utilisateur(id, nom_utilisateur, prenom_utilisateur, email, motdepasse) VALUES (?,?,?,?);"
            let ordreDonnees = [null, nom, prenom, email, motdepasse];
        

            req.getConnection((erreur, connection) => {
                if(err) {
                    console.log(erreur);
                } else {
                    connection.query(requeteSQL, ordreDonnees,(err, nouvelUtilisateur) => {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log("Création réussie == ");
                            res.redirect("/")
                        }
                    });
                }
            });
    
        
    }
};