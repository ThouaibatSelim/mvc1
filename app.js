//import dépendances
const express = require("express");
const fs = require("fs");
const mysql2 = require('mysql2');
const myConnection = require("express-myconnection");

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

// const modifierprofilRoutes = require("./routes/modifierprofil");
// app.use("/",  modifierprofilRoutes);


// // accueil
// app.get("/accueil", (req, res) => {
//     //renvoyer la page accueil
//         res.render("accueil");
//     });

// //programme tv
// app.get("/ptv", (req, res) => {

//     req.getConnection((erreur, connection) => {
//         if(erreur) {
//             console.log(erreur);
//         } else{
//             connection.query("SELECT * FROM programmediffusion", [], (err, resultat) => {
//                 if (err){
//                     console.log(err);
//                 } else {
//                     console.log("resultat: ", resultat);
//                     res.render("ptv", {resultat});
//                 }

//                 })
//             }
//         })
//     });

// //contact
// app.get("/contact", (req, res) => {
//     //renvoyer la page accueil
//         res.render("contact");
//     });

// //direct
// app.get("/direct", (req, res) => {
//     //renvoyer la page accueil
//         res.render("direct");
//     }); 

// //nouveautés
// app.get("/nouveautes", (req, res) => {
//     //renvoyer la page accueil
//         res.render("nouveautes");
//     });


//A propos
// app.get("/apropos", (req, res) => {
//     //renvoyer la page à propos de nous

//     req.getConnection((erreur, connection) => {
//         if(erreur) {
//             console.log(erreur);
//         } else{
//             connection.query("SELECT * FROM equipe WHERE id = 1", [], (err, resultat) => {
//                 if (err){
//                     console.log(err);
//                 } else {
//                     console.log("resultat: ", resultat);
//                     res.render("apropos", {resultat});
//                 }

//                 })
//             }
//         })
//     });

//     //formulaire programme tv
// app.post("/formptv", (req, res) => {
//     //renvoyer la page accueil
//         res.render("formptv");
//     });


// //recrutement
// app.post("/recrutement", (req, res) => {
//     //renvoyer la page accueil
//         res.render("recrutement");
//     });

// // Connexion
// app.post("/connexion", (req, res) => {
//     //renvoyer la page connexion
//         res.render("connexion");
//     });

// //Inscription
// app.post("/inscription", (req, res) => {
//     //renvoyer la page inscription
//         res.render("inscription");
//     });


// export de l'application
module.exports = app;