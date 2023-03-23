import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import styles from "./Card.module.css";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const  pathname  = useLocation();
console.log(pathname);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
        console.log(myFavorites);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.corazonRojo}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.corazonBlanco}>
          🤍
        </button>
      )}
      <div className={styles.cajaCard}>
        <div className={styles.cajaCardOnClick}>
          {pathname.pathname !== "/favorites" && (
            <button onClick={() => onClose(id)} className={styles.cardOnClick}>
              X
            </button>
          )}
        </div>
        <NavLink className={styles.cardInfo} to={`/detail/${id}`}>
          <h2 className={styles.cardName}>{name}</h2>
        </NavLink>
        <h2 className={styles.cardSpecies}>{species}</h2>
        <h2 className={styles.cardGender}>{gender}</h2>
        <img className={styles.cardImage} src={image} alt={name} />
      </div>
    </div>
  );
}

// Crea una funcion con el mismo nombre y las haces dispatch osea las mejoras, esto va a las props - Linea 8
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
//              Traigo el estado global si llego a necesitarlo - mapStateToProps
//              mapDispatchToProps = Como quiero modificar el estado favorites hago
//              Manda todo a las props en este caso de CARD
