import React from "react";
import { useTranslation } from "react-i18next";


import imagen_background from "../Images/Agentes/introimg2.webp";



import ServiciosComponentes from "../Components/Servicios";


export default function Servicios() {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full h-auto font-Encode-Sans py-20">
            <div className="flex justify-center items-center bg-bottom w-full h-40 md:h-80" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">{t("our_logistic_services")}</h1>
                    <p className="text-white font-regular pt-4">{t("our_logistic_services_phrase")}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center h-auto w-full py-10 md:py-20 xl:pb-20">
                <div className="flex flex-col h-auto w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">

                    <ServiciosComponentes/>

                </div>
            </div>
        </div>
    )
}