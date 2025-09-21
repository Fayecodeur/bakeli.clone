import "./App.css";
import Formation from "./components/Formation.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Statistique from "./components/Statistique.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Statistique />
      <Formation />
    </>
  );
}

export default App;
