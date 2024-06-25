import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//Animacion de AOS
import Aos from "aos";
import 'aos/dist/aos.css';

//Linea de tiempo
import LineaDeTiempo from "../Components/Linea de tiempo";

//importo datos para la linea de tiempos
import lineadetiempodatos from "../Datos/Lineadetiempo/lineadetiempodatos";


//Imagenes importadas localmente
import bote from "../Images/Nosotros/bote_grande.webp";
import mclogistics from "../Images/Nosotros/mclogistics.webp"
import mision from "../Images/Nosotros/Mision.webp";
import vision from "../Images/Nosotros/Vision.webp";
import valores from "../Images/Nosotros/Valores.webp";
import equipo_vertical from "../Images/Nosotros/Equipo_horizontal.webp";
import equipo_horizontal from "../Images/Nosotros/equipo.jpg";

//iconos
import confiable from "../Icons/Confiable.png";
import innovacion from "../Icons/Innovacion.png";
import flexible from "../Icons/Flexible.png";
import tecnologia from "../Icons/Tecnologia.png";


export default function Nosotros() {
    const { t, i18n } = useTranslation();

    let [values, setValues] = useState([]);

    useEffect(() => {
        let valuesText = t('values_text'); // Get the string
        let valuesArray = valuesText.split("\n"); // Split the string into an array
        setValues(valuesArray); // Set the array to state
    }, [t]);



    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <div className="h-auto w-full font-Encode-Sans pt-20 lg:pt-24 xl:pt-0 2xl:pt-0">
            <div className="flex items-center justify-centerw-full h-auto xl:h-screen ">
                <div className="h-full w-auto flex xl:flex-row flex-col items-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-10 lg:pt-0 py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
                        <div className="flex flex-col items-center justify-center">
                            <div className="pb-5 text-center w-full">
                                <h1 className="w-full text-4xl lg:text-5xl 2xl:text-6xl font-semibold ">{t("ourstory")}</h1>
                            </div>
                            <div className="flex items-center justify-center text-justify" >
                               <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                               <p className="text-xl font-regular text-balance hyphens-auto" lang="de">
                                    {t("born")}

                                    <br /><br />
                                    {t("ourstory_description")}
                                </p>
                               </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img className="w-auto h-auto lg:h-3/4 rounded-md " src={bote} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-auto h-full pb-6 lg:pb-10 pt-12 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">

                <div className="h-auto w-auto py-0 md:py-8 text-center lg:text-start">
                    <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold">{t("timeline")}</h1>
                </div>

                <div className="h-auto w-auto flex flex-col gap-y-6">
                    {
                        lineadetiempodatos.map(props => (
                            <LineaDeTiempo
                                key={props.id}
                                titulo={t(props.titulo)}
                                ano={props.ano}
                                texto={t(props.texto)}
                                color_circulo={props.color_circulo}
                                transicion={props.transicion}
                            />
                        ))}
                </div>
            </div>

            <div className="w-full  h-auto xl:h-screen pb-6 lg:pb-10 pt-12">
                <div className="h-full w-auto flex xl:flex-row flex-col items-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
                        <div className="flex items-center justify-center">
                            <img className="w-auto h-auto lg:h-3/4 rounded-md " src={mclogistics} alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="pb-5 text-center w-full">
                                <h1 className="w-full text-4xl lg:text-5xl 2xl:text-6xl font-semibold ">{t("the_bussiness")}</h1>
                            </div>
                            <div className="flex items-center justify-center text-justify" >
                               <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                               <p className="text-xl font-regular text-balance hyphens-auto" lang="de">
                               {t("the_bussiness_text1")}
                                    <br /><br />{t("the_bussiness_text2")}

                                    <br /><br />{t("the_bussiness_text3")}
                                </p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-auto w-full pb-6 lg:pb-10">
                <div className="flex h-full bg-center ">
                    <div className="h-auto w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">

                        <div className="lg:pb-12 pt-10 lg:pt-0 md:pb-5 text-center">
                            <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold">{t("Who_are_we")}</h1>
                        </div>

                        <div className="lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-end md:justify-end sm:justify-center justify-center" data-aos="fade-in">
                            <div className="pt-6">
                                <source />
                                <img className="h-[14rem] " src={mision} alt="" />
                            </div>
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-slate-100 shadow-md rounded-sm p-4">
                                <h2 className="text-2xl">
                                    {t("mision")}
                                </h2>
                                <p className="pt-4">
                                    {t("mision_text")}
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 lg:h-64 h-auto w-full flex lg:flex-row flex-col-reverse sm:items-center items-center lg:justify-start md:justify-start sm:justify-center justify-center" data-aos="fade-in">
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-slate-100 shadow-md rounded-sm p-4" >
                                <h2 className="text-2xl">
                                    {t("vision")}
                                </h2>
                                <p className="pt-4 text-sm sm:text-sm md:text-md lg:text-lg">
                                    {t("vision_text")}
                                </p>
                            </div>
                            <div className="lg:pt-6">
                                <img className="h-[14rem] " src={vision} alt="" />
                            </div>
                        </div>

                        <div className="mt-12 lg:h-64 h-auto w-full flex lg:flex-row flex-col sm:items-center items-center lg:justify-end md:justify-end sm:justify-center justify-center" data-aos="fade-in">
                            <div className="pt-6">
                                <img className="h-[14rem] " src={valores} alt="" />
                            </div>
                            <div className="h-full w-full lg:w-[26rem] xl:lg:w-[26rem] flex flex-col bg-slate-100 shadow-md rounded-sm p-4">
                                <h2 className="text-2xl">
                                    {t("values")}
                                </h2>
                                <ul className="list-disc list-inside">
                                    {values.map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-auto 2xl:h-screen w-auto px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 py-24">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    <div className="h-full w-auto overflow-hidden">
                        <picture className="h-full">
                            <source media="(min-width: 1024px)" srcSet={equipo_horizontal} />
                            <source media="(max-width: 1023px)" srcSet={equipo_vertical} />
                            <img className="h-full w-auto rounded-md object-cover" src={equipo_horizontal} alt="Equipo" />
                        </picture>
                    </div>
                    <div className="h-full">
                        <div >
                            <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-semibold text-center xl:text-start">{t("why_choose_us")}</h1>
                        </div>
                        <div className="pt-4 xl:pt-8">
                            <ul className="list-disc list-inside text-justify text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide">
                                <li>
                                    {t("integration")}
                                </li>
                                <li>
                                    {t("loyalty_commitment")}
                                </li>
                                <li>
                                    {t("quality_service")}
                                </li>
                            </ul>
                        </div>
                        <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-x-12 md:gap-y-12 gap-y-12 justify-items-center pt-12 xl:pt-6">
                            <div className="text-white h-28 w-28 flex flex-col justify-center items-center bg-blue shadow-md rounded-sm" data-aos="fade-down" >
                                <img className="h-12 w-12 invert" src={confiable} alt="" />
                                <p>{t("reliability")}</p>
                            </div>
                            <div className="text-white h-28 w-28 flex flex-col justify-center items-center bg-aureolin shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="200">
                                <img className="h-12 w-12 invert" src={innovacion} alt="" />
                                <p>{t("innovation")}</p>
                            </div>
                            <div className="text-white h-28 w-28 flex flex-col justify-center items-center bg-bluemunsell shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="300">
                                <img className="h-12 w-12 invert" src={flexible} alt="" />
                                <p>{t("flexibility")}</p>
                            </div>
                            <div className="text-white h-28 w-28 flex flex-col justify-center items-center bg-aureolin shadow-md rounded-sm" data-aos="fade-down" data-aos-delay="400">
                                <img className="h-12 w-12 invert" src={tecnologia} alt="" />
                                <p>{t("technology")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}