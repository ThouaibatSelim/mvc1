//import 
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");

const app = express();

// accueil
app.get("/accueil", (req, res) => {
    //renvoyer la page accueil
        res.render("accueil");
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