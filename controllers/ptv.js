module.exports = {
    ptvView: (req, res) => {
        req.getConnection((erreur, connection) => {
            if(erreur) {
                console.log(erreur);
            } else{
                connection.query("SELECT * FROM programmediffusion", [], (err, resultat) => {
                    if (err){
                        console.log(err);
                    } else {
                        console.log("resultat: ", resultat);
                        res.render("ptv", {resultat});
                        }
                    });

                }
        });
    }
}
