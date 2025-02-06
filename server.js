//http
const http = require('http');

const app = require("./app.js");

//Port 3005
const numPort = 3005;
// app.set("port", numPort);

//date et heure
const date = new Date;
let jour = date.toLocaleDateString();
let heure = date.toLocaleTimeString();

//creation du serveur
const server = http.createServer(app);

//écoute du port 3005
server.listen(numPort, () => {
    console.log(`Le serveur est activé au port : ${numPort}, le ${jour}, à ${heure}`);
  });