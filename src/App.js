import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/views/About";

function App() {
  const [characters, setCharacters] = useState([]);

  // Devuelve un objeto con una propiedad que contiene la ruta
  const { pathname } = useLocation();

  // Control de acceso
  const [access, setAccess] = useState(false);

  // Navegacion luego del login
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  useEffect(() => {
    const handleBackButton = () => {
      if (pathname === "/") {
        window.history.pushState(null, "", "/");
        navigate("/home");
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [pathname]);
  //Credenciales de mentira
  const username = "mauri@gmail.com";
  const password = "pass1234";

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

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      alert("Login Exitoso :D");
      navigate("/home");
    } else {
      alert("El usuario debe ser: mauri@gmail.com y password: pass1234");
    }
  };

  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route
          path="/"
          element={access ? <Navigate to="/home" /> : <Form login={login} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
