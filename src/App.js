import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img className="imgTitulo" src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"></img>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div className="Main">
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
