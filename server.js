//http
const http = require('http');

const app = require("./app.js");

require("dotenv").config();

//Port 3005
// const numPort = 3005;
// app.set("port", numPort);

//Création du serveur
const server = http.createServer(app);

function numPort() {
  let port;
  if (process.env.STATUS === 'developpement') { 
    port = process.env.DEV_PORT;
  } else {
    port = process.env.PROD_PORT;
  }
  return port;
};

//date et heure
const date = new Date;
let jour = date.toLocaleDateString();
let heure = date.toLocaleTimeString();

const port = process.env.DEV_PORT

//écoute du port 3005
server.listen(port, () => {
    console.log(`Le serveur est en mode: ${process.env.STATUS} au port : ${port}, le ${jour}, à ${heure}`);
  });