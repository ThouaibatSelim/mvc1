module.exports = {
    aproposView: (req, res) => {
        req.getConnection((erreur, connection) => {
            if(erreur) {
                console.log(erreur);
            } else{
                connection.query("SELECT * FROM equipe WHERE id = 1", [], (err, resultat) => {
                    if (err){
                        console.log(err);
                    } else {
                        console.log("resultat: ", resultat);
                        res.render("apropos", {resultat});
                    }
    
                    })
                }
            })
    }
};