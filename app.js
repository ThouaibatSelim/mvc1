//import 
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");

const app = express();

const connection = {
    host : 'localhost',
    user : 'root',
    password : 'mythouaiL9222',
    port : 3005,
    database : 'chainetv'
};

//Vues
app.set("views", "./views"); //emplacement
app.set("view engine", "ejs"); //moteur

app.use(express.static("public"));

// accueil
app.get("/accueil", (req, res) => {
    //renvoyer la page accueil
        res.render("accueil");
    });

//programme tv
app.get("/ptv", (req, res) => {
    //renvoyer la page accueil
        res.render("ptv");
    });

//recrutement
app.get("/recrutement", (req, res) => {
    //renvoyer la page accueil
        res.render("recrutement");
    });

//recrutement
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
        res.render("apropos");
    });

    //Route Connexion
app.get("/connexion", (req, res) => {
    //renvoyer la page connexion
        res.render("connexion");
    });

//Route Inscription
app.get("/inscription", (req, res) => {
    //renvoyer la page inscription
        res.render("inscription");
    });

    module.exports = app;