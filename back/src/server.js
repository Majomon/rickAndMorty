const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    console.log(url);

    if (url.includes("rickandmorty/character/")) {
      const id = url.split("/").at(-1); // Saco el id - con el -1 voy a la ultima posición
      const character = data.find((char)=>char.id==id) // Busca el personaje de ID tanto
      console.log(`Estoy en la ruta con el id ${id}`);
      console.log(character);

      if(character){
        res.writeHead(200,{"Content-Type":"application/json"})
        return res.end(JSON.stringify(character))
      }else{
        res.writeHead(404,{"content-Type": "application/json"})
        return res.end(JSON.stringify({error: "Character not found"}))
      }

    }
  })
  .listen(3001, "localhost");
