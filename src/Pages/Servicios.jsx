import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import imagen_background from "../Images/Agentes/introimg2.jpg";



import ServiciosComponentes from "../Components/Servicios";


export default function Servicios() {
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            if (location.hash) {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }
        };
        window.addEventListener('hashchange', handleHashChange);

        // Call handleHashChange on initial render
        handleHashChange();

        // Clean up by removing the event listener
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [location]);


    return (
        <div className="w-full h-auto font-Encode-Sans py-20">
            <div className="flex justify-center items-center bg-bottom w-full h-40 md:h-80" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl font-semibold">Nuestros Servicios Logisticos</h1>
                    <p className="text-white font-regular pt-4">Lo común entre nuestros servicios es la excelencia</p>
                </div>
            </div>

            <div className="flex flex-col justify-center h-auto w-full py-10 md:py-20 xl:py-20">
                <div className="flex flex-col h-auto w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">

                    <ServiciosComponentes/>

                </div>
            </div>
        </div>
    )
}