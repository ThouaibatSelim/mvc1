//import dépendances
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");

//app type express
const app = express();

//connection base de données
const connection = {
    host : 'localhost',
    user : 'root',
    password : 'mythouaiL9222',
    port : 3306,
    database : 'chainetv'
};

//Vues
app.set("views", "./views"); //emplacement
app.set("view engine", "ejs"); //moteur

app.use(express.static("public"));
app.use(myConnection( mysql2, connection, "pool"));


// accueil
app.get("/accueil", (req, res) => {
    //renvoyer la page accueil
        res.render("accueil");
    });

//programme tv
app.get("/ptv", (req, res) => {

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

                })
            }
        })
    });



//recrutement
app.get("/recrutement", (req, res) => {
    //renvoyer la page accueil
        res.render("recrutement");
    });


//contact
app.get("/contact", (req, res) => {
    //renvoyer la page accueil
        res.render("contact");
    });

//direct
app.get("/direct", (req, res) => {
    //renvoyer la page accueil
        res.render("direct");
    }); 

//nouveautés
app.get("/nouveautes", (req, res) => {
    //renvoyer la page accueil
        res.render("nouveautes");
    });

//formulaire programme tv
app.get("/formptv", (req, res) => {
    //renvoyer la page accueil
        res.render("formptv");
    });


//A propos
app.get("/apropos", (req, res) => {
    //renvoyer la page à propos de nous

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
    });

// Connexion
app.get("/connexion", (req, res) => {
    //renvoyer la page connexion
        res.render("connexion");
    });

//Inscription
app.get("/inscription", (req, res) => {
    //renvoyer la page inscription
        res.render("inscription");
    });



// export de l'application
module.exports = app;