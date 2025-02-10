module.exports = { 
    registerUtilisateur: async (req, res) => {
        let requeteSQL = "INSERT INTO utilisateur(id, email, motdepasse);"
        let ordreDonnees = [null, email, motdepasse];
    

req.getConnection((erreur, connection) => {
    if(erreur) {
        console.log(erreur);
    } else{
        connection.query(requeteSQL, ordreDonnees, (err)

            if(err){
                console.log(err);
            } else {
                console.log("Création réussie ==")
                res.redirect("/");
            }
        });

    }

});

