import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import characters from "./data.js";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
