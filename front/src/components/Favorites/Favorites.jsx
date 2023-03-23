import React from "react";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

function Favorites(props) {
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order));
  };

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    dispatch(filterCards(filter));
  };

  return (
    <div className={styles.cardContainer}>
      {console.log(props.myFavorites)}
      <div>
        {/* select para ordenamiento */}
        <select name="order" onChange={(event) => handleOrderChange(event)}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        {/* select para filtrado */}
        <select name="filter" onChange={(event) => handleFilterChange(event)}>
          <option value="all">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {props.myFavorites.map(({ id, name, species, gender, image }) => {
        return (
          <div>
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
