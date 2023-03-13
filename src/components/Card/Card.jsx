import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={styles.cajaCard}>
      <button onClick={() => onClose(id)} className={styles.cardOnClick}>
        X
      </button>
      <NavLink className={styles.cardInfo} to={`/detail/${id}`}>
      <h2 className={styles.cardName}>{name}</h2>
      </NavLink>
      <h2 className={styles.cardSpecies}>{species}</h2>
      <h2 className={styles.cardGender}>{gender}</h2>
      <img className={styles.cardImage} src={image} alt={name} />
      
 
    </div>
  );
}
