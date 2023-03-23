import React from "react";
import RickAndMorty from "../../assets/rick-and-morty.jpg";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <>
      <div className={styles.containerNavBar}>
        <div className={styles.navBar}>
          <NavLink to="/" className={styles.containerImg} >
            <img className={styles.imgTitulo} src={RickAndMorty} alt="imagen"></img>
          </NavLink>
          <NavLink to="/home" className={styles.navLink}>
            <h2 className={styles.h2NavLink}>Home</h2>
          </NavLink>
          <NavLink to="/favorites" className={styles.navLink}>
            <h2 className={styles.h2NavLink}>Favorites</h2>
          </NavLink>
          <NavLink to="/about" className={styles.navLink}>
            <h2 className={styles.h2NavLink}>About</h2>
          </NavLink>
          <SearchBar onSearch={props.onSearch} />
        </div>
      </div>
    </>
  );
}
