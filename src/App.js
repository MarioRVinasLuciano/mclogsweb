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
import SeguridadyPrivacidad from "./Pages/PrivacidadySeguridad";
import { useEffect } from "react";
import Contacto from "./Pages/Contacto";
import ScrollToTopButton from "./Components/ScrolltoTopButton";
import Terminos from "./Pages/Terminos";
import CentrodeAyuda from "./Pages/CentrodeAyuda";
import Soporte from "./Pages/Soporte";
import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes";
import './i18n';

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
        <Route path="/centrodeayuda" element={<CentrodeAyuda/>} />
        <Route path="/articulo/:oid" element={<ArticulosPagina />} />
        <Route path="/SeguridadyPrivacidad" element={<SeguridadyPrivacidad/>} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/pregunasfrecuentes" element={<PreguntasFrecuentes/>} />
      </Routes>
      <ScrollToTopButton />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
