const http = require('http');

const app = require("./app.js");

//Port 3005
const numPort = 3005;
// app.set("port", numPort);

const date = new Date;
let jour = date.toLocaleDateString();
let heure = date.toLocaleTimeString();

//
const server = http.createServer(app);

server.listen(numPort, () => {
    console.log(`Le serveur est activé au port : ${numPort}, le ${jour}, à ${heure}`);
  });