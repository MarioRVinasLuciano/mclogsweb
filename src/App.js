import { Routes, Route, useLocation } from "react-router-dom";
import 'default-passive-events';
import Homepage from "./Pages/Home";
import NavBar from "./Components/Navbar";
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios";
import Agentes from "./Pages/Agentes";
import Noticias from "./Pages/Noticias";
import Rastreo from "./Pages/Rastreo";
import Footer from "./Components/Footer";
import ArticulosPagina from "./Components/Articulo";
import Seguridad from "./Pages/Seguridad";
import Privacidad from "./Pages/Privacidad";
import { useEffect } from "react";
import Contacto from "./Pages/Contacto";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {


  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/rastreo" element={<Rastreo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulo/:oid" element={<ArticulosPagina />} />
        <Route path="/seguridad" element={<Seguridad/>} />
        <Route path="/privacidad" element={<Privacidad/>} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

