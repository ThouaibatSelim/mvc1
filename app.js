//import dépendances
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");
const session = require("express-session");

//Appel Routes
const accueilRoutes = require("./routes/accueil");  //accueil
const ptvRoutes = require("./routes/ptv");  //programme tv
const formptvRoutes = require("./routes/formptv");  //formptv
const directRoutes = require("./routes/direct");    //direct
const nouveautesRoutes = require("./routes/nouveautes");    //nouveautés
const aproposRoutes = require("./routes/apropos" );    //a propos
const recrutementRoutes = require("./routes/recrutement");  //recrutement
const inscriptionRoutes = require("./routes/inscription");  //inscription
const authRoutes = require("./routes/auth");    //connexion
const profilRoutes = require("./routes/profil");    //profil
const modifierprofilRoutes = require("./routes/modifierprofil");    //modifier profil
const contactRoutes = require("./routes/contact");  //contact

// .env
require("dotenv").config();

//app type express
const app = express();

//Vues
app.set("views", "./views"); //emplacement
app.set("view engine", "ejs"); //moteur

//connection base de données
const connection = {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    port : process.env.PORT,
    database : process.env.DB
};


app.use(express.json());  // Pour les requêtes en JSON
app.use(express.urlencoded({ extended: true }));

// session
app.use(session({
    secret: "monSecretUltraSecurise",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // false si pas en HTTPS
}));

// public, mysql
app.use(express.static("public"));
app.use(myConnection( mysql2, connection, "pool"));

//use routes
app.use('/', accueilRoutes);    //accueil
app.use('/', ptvRoutes);    //programme tv
app.use('/', formptvRoutes);    //formptv
app.use('/', directRoutes);     //direct
app.use('/', nouveautesRoutes);   //nouveautés
app.use('/', aproposRoutes);    //a propos
app.use('/', recrutementRoutes);    //recrutement
app.use('/', inscriptionRoutes);    //inscription
app.use('/', authRoutes);   //connexion
app.use("/", profilRoutes);  //profil
app.use("/",  modifierprofilRoutes);   //modifier profil
app.use('/', contactRoutes);    //contact

// export de l'application
module.exports = app;