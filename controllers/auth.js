module.exports = { 
   
   loginView: (req, res) => {
    res.render("connexion");
   },

    registerUtilisateur: async (req, res) => {
        console.log("Register pass *********");

        const { email, password } = req.body;
    
        db.query('SELECT * FROM utilisateur WHERE email = ?', [email], async (err, results) =>{
            if(err) {
                console.error(err);
                return res.send('Erreur de connexion');
            }

            if (results.length === 0) {
                return res.send('utilisateur non trouvé');
            }

            const utilisateur = results[0];

            const match = await bcrypt.compare(password, utilisateur.motdepasse);

            if (match) {
                res.send('connexion réussie!');
            } else{
                res.send('Email ou mot de passe incorrect');
            }

        });

    }
};
