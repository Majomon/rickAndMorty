import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b6892061a8d9.e2bb2e6f05488ea2cfc3";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };
  
  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
