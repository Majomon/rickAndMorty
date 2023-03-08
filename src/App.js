import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img className="imgTitulo" src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="imagen"></img>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div className="Main">
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
