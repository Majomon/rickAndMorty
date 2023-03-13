import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { useLocation } from "react-router-dom";

export default function NavBar(props) {

  // Devuelve un objeto con una propiedad que contiene la ruta
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.containerImg}>
          <img
            className={styles.imgTitulo}
            src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"
            alt="imagen"
          ></img>
        </div>
        <NavLink to="/home">
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/about">
          <h2>About</h2>
        </NavLink>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </>
  );
}
