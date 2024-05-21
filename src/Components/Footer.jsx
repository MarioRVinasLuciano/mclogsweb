import React from "react";
import { Link } from "react-router-dom";

// Importacion - Logo
import mclogo from "../Images/Logos/logo.png"; // Logo de MC
import apple from "../Icons/Apple.png"; // Logo de apple
import android from "../Icons/Android.png"; // Logo de android

export default function Footer() {
  let Acceso_rapido = [
    { name: "Nosotros", link: "/nosotros" },
    { name: "Servicios", link: "/servicios" },
    { name: "Agentes", link: "/agentes" },
    { name: "Noticias", link: "/noticias" },
    { name: "Rastreo", link: "/rastreo" },
    { name: "Mi Cuenta", link: "https://my.mclogs.com/auth/login" },
  ];

  let Enlaces = [
    { name: "Politica de Privacidad", link: "/privacidad" },
    { name: "Politica de Seguridad", link: "/seguridad" },
    { name: "Terminos de uso", link: "/terminos" },
  ];

  return (
    <footer className="w-full pt-6 bg-white">
      <div className="flex justify-center items-center h-auto w-full">
        <div className="grid grid-rows-4 sm:grid-rows-4 md:grid-rows-4 lg:grid-rows-1 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-x-6 px-16">
          <div className="h-auto col-span-1 lg:col-span-1 row-start-1 sm:row-start-1 md:row-start-1 lg:row-start-1">
            <div>
              <img className="h-24 w-50" src={mclogo} alt="MC Logo" />
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.
              </p>
            </div>
            <div className="flex flex-row py-6">
              <div className="pr-4">
                <div className="rounded-full h-10 w-10 content-center border-slate-300 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 p-2 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-4">
                <div className="rounded-full h-10 w-10 content-center border-slate-300 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 p-2 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-4">
                <div className="rounded-full h-10 w-10 content-center border-slate-300 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 p-2 text-gray-500"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto col-span-1 lg:col-span-1 row-start-2 sm:row-start-2 md:row-start-2 lg:row-start-1 text-gray-500 md:pl-20">
            <div>
              <h1 className="text-2xl text-gray-600">Acceso rápido</h1>
            </div>
            <div className="h-72 w-auto pb-10 text-start">
              <div className="w-32">
                {Acceso_rapido.map((link, id) => (
                  <div className="py-2" key={id}>
                    <p className="text-sm">
                      <Link to={link.link}>{link.name}</Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-auto col-span-1 lg:col-span-1 row-start-3 sm:row-start-3 md:row-start-3 lg:row-start-1 text-gray-500 md:pl-12">
            <div>
              <h1 className="text-2xl text-gray-600">Enlaces</h1>
            </div>
            <div className="h-72 w-auto pb-10 text-start">
              <div className="w-full">
                {Enlaces.map((link, id) => (
                  <div className="py-2" key={id}>
                    <p className="text-sm">
                      <Link to={link.link}>{link.name}</Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-auto col-span-1 lg:col-span-1 row-start-4 sm:row-start-4 md:row-start-4 lg:row-start-1 text-gray-500">
            <div className="text-start">
              <h1 className="text-2xl text-gray-600">Horario</h1>
            </div>
            <div className="h-72 w-auto text-center">
              <div className="text-start pt-4">
                <div>
                  <h2 className="text-md">Oficinas</h2>
                </div>
                <div className="py-2">
                  <p className="text-sm">Lunes a Viernes 8:00 am - 5:00 pm</p>
                </div>
                <div className="py-2">
                  <p className="text-sm">Sábados 8:00 am - 1:00 pm</p>
                </div>
                <div>
                  <h2 className="text-md">Plataformas</h2>
                </div>
                <div className="py-2 gap-x-2 flex flex-row">
                  <img className="h-6 w-6" src={apple} alt="Apple Store" />
                  <p className="text-sm">Disponible en Apple Store</p>
                </div>
                <div className="py-2 gap-x-2 flex flex-row">
                  <img className="flex h-6 w-6" src={android} alt="Google Play" />
                  <p className="flex text-sm">Disponible en Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-2">
        <p className="text-sm text-gray-500">Todos los derechos reservados © 2024 MC LOGISTICS SRL</p>
      </div>
    </footer>
  );
}
