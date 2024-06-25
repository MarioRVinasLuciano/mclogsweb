import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import imagen_background from "../Images/Agentes/introimg2.webp";

export default function Noticias() {
  const { t, i18n } = useTranslation();
  const [noticias, setNoticias] = useState([]);
  const [filteredNoticias, setFilteredNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  const latestDate = Math.max(...noticias.map(contenido => new Date(contenido.create_in)));

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
    <div className="h-auto w-full font-Encode-Sans pb-12 pt-16 ">
      <div className="flex justify-center items-center bg-top w-full h-44 md:h-72 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center  justify-between w-full gap-y-4">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">{t("news")}</h1>
          <input
            className="h-12 w-full md:w-56 lg:w-56 xl:w-80 rounded-md border-gray-20 border-2 p-2"
            placeholder={t("search")}
            onChange={handleBuscar}
          />
        </div>
      </div>

      {cargando ? (
        <div className="flex items-center justify-center py-56 w-full">
          <div role='status' aria-label='loading'>
        <svg className='w-20 h-20 stroke-oldgold animate-spin ' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_9023_61563_3)'>
                <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' strokeWidth='1.4' strokeLinecap='round' className='my-path'></path>
            </g>
            <defs>
                <clipPath id='clip0_9023_61563_3'>
                    <rect width='24' height='24' fill='white'></rect>
                </clipPath>
            </defs>
        </svg>
        <span className='sr-only'>Loading...</span>
    </div>
        </div>
      ) : filteredNoticias.length === 0 ? (
        <p className="text-6xl py-56 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-center">No se encontraron noticias.</p>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-6 lg:gap-10 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-10">
          {filteredNoticias.map((contenido, index) => (
            <div
              key={contenido.oid}
              className={
                index === 0
                  ? "rounded-md bg-white shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-200 col-span-2 row-span-1"
                  : "rounded-md bg-white shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-200 lg:h-auto lg:col-span-1 lg:row-span-1 col-span-2 row-span-1"
              }
            >
              <Link to={`/articulo/${contenido.oid}`}>
                <div className="flex flex-col h-full">
                  <div>
                    <img
                      className={
                        index === 0
                          ? "w-full h-full rounded-md object-cover"
                          : "w-full h-full lg:h-48 rounded-md object-cover"
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
                        <p className="text-md text-slate-500">{contenido.author}</p>
                      </div>
                      {new Date(contenido.create_in).getTime() === latestDate ? (
                        <div className="rounded-md p-2 w-auto h-auto bg-bluemunsell animate-pulse text-center">
                          <p className="text-sm text-white">{t("Latestnews")}</p>
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

