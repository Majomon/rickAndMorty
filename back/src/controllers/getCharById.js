const axios = require("axios");

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "b6892061a8d9.e2bb2e6f05488ea2cfc3";

const getCharById = (res, id) => {
  //Esto es el .then - success handler
  axios.get(`${URL}/character/${id}?key=${KEY}`).then((response) => {
    const { id, image, name, gender, species } = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id, image, name, gender, species }));
  });

};

module.exports = getCharById;
