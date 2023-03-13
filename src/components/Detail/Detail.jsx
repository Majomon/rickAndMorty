import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  // Toma el valor gurdado en /detailID
  /*  const params=useParams(); */
  const {detailId}=useParams()

  const [character, setCharacter] = useState({});
  // Cuando el componente se monta se ejecuta la petición
  // npm i axios - uso similar a fetch
  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b6892061a8d9.e2bb2e6f05488ea2cfc3";

    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, [detailId]);

  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}:</p>
          <p>{character.species}</p>
          <p>{character.gender}:</p>
          <p>{character.origin?.name}</p>{" "}
          {/* Cuando nos aseguremos que de origin llega recien monta todo */}
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}
