const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);


//! Ruta a favoritos con distintos request
router.post("/fav", (req, res) => {
  favs.push(req.body);
  res.status(200).json(favs);
});

router.get("/fav", (req, res) => {
  res.status(200).json(favs);
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id !== id);
  res.status(200).json({ status: "Ok" });
});

module.exports = router;
