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
    <footer className="bg-gray-100">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
        <div>
          <img className="h-24 w-50" src={mclogo} alt="MC Logo" />
          <p className="max-w-xs mt-4 text-sm text-gray-600">
            Nacemos en el 2005 de la inquietud de crear valor en el proceso de gestión de la cadena de suministro, viendo oportunidades en el sector logístico de mejor flujo de información.
          </p>
          <div className="flex mt-8 space-x-6 text-gray-600">
            <a className="hover:opacity-75" href="https://www.google.com/maps/place/M.C.+Logistics+SRL/@18.501022,-69.9557977,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf8987ea6ea207:0x7bcfa7fa8182db54!8m2!3d18.501022!4d-69.953609" target="_blank" rel="noreferrer">
              <span className="sr-only"> Location </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </a>
            <a className="hover:opacity-75" href="https://wa.me/18095653265">
              <span className="sr-only"> WhatsApp </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </a>
            <a className="hover:opacity-75" href="mailto:info@mclogs.com">
              <span className="sr-only"> Email </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-medium">Acceso rápido</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              {Acceso_rapido.map((link, id) => (
                <Link to={link.link} className="hover:opacity-75" key={id}>{link.name}</Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-medium">Enlaces</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              {Enlaces.map((link, id) => (
                <Link to={link.link} className="hover:opacity-75" key={id}>{link.name}</Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-medium">Horario</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <p className="text-md text-black">Oficinas</p>
              <p className="text-sm py-2">Lunes a Viernes 8:00 am - 5:00 pm</p>
              <p className="text-sm py-2">Sábados 8:00 am - 1:00 pm</p>
              <p className="text-md text-black">Plataformas</p>
              <a href='https://play.google.com/store/apps/details?id=com.mclogs.www' target="_blank" rel="noopener noreferrer" className="flex items-center py-2 space-x-2">
                <img className="h-6 w-6" src={apple} alt="Apple Store" />
                <p className="text-sm">Disponible en Apple Store</p>
              </a>
              <a href='https://apps.apple.com/do/app/mclogs/id1504701375' target="_blank" rel="noopener noreferrer" className="flex items-center py-2 space-x-2">
                <img className="h-6 w-6" src={android} alt="Google Play" />
                <p className="text-sm">Disponible en Google Play</p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="px-10 sm:px-10 md:px-20 lg:px-40">
    <hr className="h-0.5 bg-slate-200 w-full " />
    </div>
      <div className="flex items-center justify-center py-6">
        <p className="text-sm text-gray-500">Todos los derechos reservados © 2024 MC LOGISTICS SRL</p>
      </div>
  </footer>
  
  
  );
}
