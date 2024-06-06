import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import imagen_background from "../Images/Agentes/introimg2.jpg";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [filteredNoticias, setFilteredNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://support.consilialogistics.com/mclogs/news?search="
        );
        const data = await response.json();
        setNoticias(data);
        setFilteredNoticias(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setCargando(false);
      }
    };
    fetchData();
  }, []);

  const handleBuscar = (e) => {
    const busquedaNormal = e.target.value.toLowerCase();
    setBusqueda(busquedaNormal);
    const noticiasFiltradas = noticias.filter(noticia =>
      noticia.title.toLowerCase().includes(busquedaNormal)
    );
    setFilteredNoticias(noticiasFiltradas);
  }

  return (
    <div className="h-sreen w-full font-Encode-Sans pb-12 pt-16 ">
      <div className="flex justify-center items-center bg-top w-full h-72 px-10 sm:px-10 md:px-20 lg:px-40" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center  justify-between w-full gap-y-4">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">Noticias</h1>
          <input
          className="h-12 w-full md:w-56 lg:w-56 xl:w-80 rounded-md border-gray-20 border-2 p-2"
          placeholder="Buscar"
          onChange={handleBuscar}
        />
        </div>
      </div>

      {cargando ? (
        <p className="text-6xl text-center py-56 w-full">Cargando...</p>
      ) : filteredNoticias.length === 0 ? (
        <p className="text-6xl py-56 px-10 sm:px-10 md:px-20 lg:px-40 text-center">No se encontraron noticias.</p>
      ) : (
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 lg:gap-10 px-10 sm:px-10 md:px-20 lg:px-40 pt-10">
          {filteredNoticias.map((contenido, index) => (
            <div
              key={contenido.oid}
              className={
                index === 0
                  ? "rounded-md bg-white shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-200 lg:col-span-2 lg:row-span-1"
                  : "rounded-md bg-white shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-200 lg:h-auto lg:col-span-1 lg:row-span-1 sm:col-span-2 sm:row-span-1"
              }
            >
              <Link to={`/articulo/${contenido.oid}`}>
                <div className="flex flex-col h-full">
                  <div>
                    <img
                      className={
                        index === 0
                          ? "w-full h-full rounded-md object-cover"
                          : "w-full h-48 rounded-md object-cover"
                      }
                      src={`https://support.consilialogistics.com/public/${contenido.image}`}
                      alt=""
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-xl">{contenido.title}</p>
                      <p className="text-sm text-slate-500">{contenido.subtitle}</p>
                      <p className="text-sm text-slate-500 pt-4">{contenido.gancho}</p>
                    </div>
                    <div className="flex flex-row justify-between p-2">
                      <div>
                        <p className="text-md text-slate-500">{contenido.type}</p>
                      </div>
                      {index === 0 ? (
                        <div className="rounded-md p-2 w-auto h-auto bg-bluemunsell animate-pulse">
                          <p className="text-sm text-white">Ultimas noticias</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

