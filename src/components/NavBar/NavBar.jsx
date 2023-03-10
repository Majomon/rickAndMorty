import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
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
        <SearchBar onSearch={props.onSearch} />

      </div>
    </>
  );
}
