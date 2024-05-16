import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/Home";
import NavBar from "./Components/Navbar";
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios";
import Agentes from "./Pages/Agentes";
import Noticias from "./Pages/Noticias";
import Rastreo from "./Pages/Rastreo";
import Footer from "./Components/Footer";
import ArticulosPagina from "./Components/Articulo";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Check if current route is not the homepage
  const isNotHomepage = useLocation().pathname !== "/";

  return (
    <>
      {/* Render NavBar only if not on homepage */}
      {isNotHomepage && <NavBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/rastreo" element={<Rastreo />} />
        <Route path="/articulo/:oid" element={<ArticulosPagina />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

