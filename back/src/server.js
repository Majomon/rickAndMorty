require("dotenv").config();
// Para que el server pueda usar routes
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

// Creando el server con Express
const server = express();

//  Transforma en objeto JSON
server.use(express.json());

// Nos da información sobre lo que pasa en el servidor
server.use(morgan("dev"));

// Permisos
server.use(cors());

// El server esta habilitado para usar router
server.use("/", router);


module.exports = server;
