//import dépendances
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");
require("dotenv").config();


//app type express
const app = express();

app.use(express.json());  // Pour les requêtes en JSON
app.use(express.urlencoded({ extended: true }));

const session = require("express-session");

app.use(session({
    secret: "monSecretUltraSecurise",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // false si pas en HTTPS
}));

//connection base de données
const connection = {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    port : process.env.PORT,
    database : process.env.DB
};

//Vues
app.set("views", "./views"); //emplacement
app.set("view engine", "ejs"); //moteur

app.use(express.static("public"));
app.use(myConnection( mysql2, connection, "pool"));

//ROUTES

//connexion
const authRoutes = require("./routes/auth");
app.use('/', authRoutes);

//accueil
const accueilRoutes = require("./routes/accueil");
app.use('/', accueilRoutes);

//a propos
const aproposRoutes = require("./routes/apropos" );
app.use('/', aproposRoutes);

//contact
const contactRoutes = require("./routes/contact");
app.use('/', contactRoutes);

//direct
const directRoutes = require("./routes/direct");
app.use('/', directRoutes);

//formptv
const formptvRoutes = require("./routes/formptv");
app.use('/', formptvRoutes);

//inscription
const inscriptionRoutes = require("./routes/inscription");
app.use('/', inscriptionRoutes);

//nouveautés
const nouveautesRoutes = require("./routes/nouveautes");
app.use('/', nouveautesRoutes);

//programme tv
const ptvRoutes = require("./routes/ptv");
app.use('/', ptvRoutes);

//recrutement
const recrutementRoutes = require("./routes/recrutement");
app.use('/', recrutementRoutes);

//profil
const profilRoutes = require("./routes/profil");
app.use("/", profilRoutes);

const modifierprofilRoutes = require("./routes/modifierprofil");
app.use("/",  modifierprofilRoutes);


// export de l'application
module.exports = app;