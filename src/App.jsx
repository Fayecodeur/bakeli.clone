import "./App.css";
import Chiffres from "./components/Chiffres.jsx";
import Cta from "./components/Cta.jsx";
import Evenements from "./components/Evenements.jsx";
import Footer from "./components/Footer.jsx";
import Formation from "./components/Formation.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Statistique from "./components/Statistique.jsx";
import Temoignages from "./components/Temoignages.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Statistique />
      <Formation />
      <Chiffres />
      <Evenements />
      <Temoignages />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
